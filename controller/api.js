const db = require("../model/index");
const imageUpload = db.Admin;

//Aws mdules
let AWS = require("aws-sdk");
AWS.config.update({
    accessKeyId:  process.env.awsAccessKeyId,
    secretAccessKey: process.env.awsSecretAccessKey,
    region: process.env.region
});

const s3bucket = new AWS.S3({
  accessKeyId:  process.env.awsAccessKeyId,
  secretAccessKey: process.env.awsSecretAccessKey
});

//GetSignedUrl from s3bucket
function getSignedUrl(key) {
    const sts = new AWS.STS();
    return new Promise((resolve, reject) => {
      sts.assumeRole(
        {
          DurationSeconds: 3600,
          ExternalId: "5241-8989-6967",
          RoleArn: "arn:aws:iam::524189896967:role/s3RoleForAccessingData",
          RoleSessionName: "abc"
        },
        (err, data) => {
          if (err) throw err;
          console.log(data.Credentials.SessionToken)
          const accessparams = {
            accessKeyId:  process.env.awsAccessKeyId,
            secretAccessKey: process.env.awsSecretAccessKey,
            // sessionToken: data.Credentials.SessionToken
          };
          const s3 = new AWS.S3(accessparams);
          const url = s3.getSignedUrl(
            "getObject",
            {
              Bucket: `${process.env.s3BucketName}`,
              Key: `${key}`,
              Expires: 600 * 5 // time in seconds: e.g. 60 * 5 = 5 min
            },
            (err, data) => {
              if (err) throw err;
              else{resolve(data)};
            }
          );
        }
      );
    });
  }

exports.imageInsert = (req,res) =>{
    let data = req.file;
    let imageName= data.originalname;
    let buffer = data.buffer;
   

    // Params
    const params = {
        Bucket: `${process.env.s3BucketName}`,
        Key: `${imageName}`,
        Body: buffer
    };

    s3bucket.upload(params, async function(err, data) {
        if (err) console.log(err);
        else {
            console.log(data,'dat')
          let signedUrl = await getSignedUrl(imageName);
          console.log(signedUrl)
          const imageData = {
            image_name:imageName,
            image_url:signedUrl,
            logging: console.log
        };
         imageUpload.create(imageData).then((result) => {
        // console.log(result)
        let response = {
            status:"success",
            message: 'Insert'
        };
        res.status(200).json(response);
    }).catch((error) => {
        console.log(error)
        let response = {
            status:error,
            message: 'Internal server error. Unable to create the data'
        };
        res.status(200).json(response);
    })
        }
    });
  
}