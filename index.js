import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, GetObjectCommand, PutObjectCommand } from "@aws-sdk/client-s3";

const clientParams = {
    region: "ap-south-1",
    credentials: {
        accessKeyId: "",
        secretAccessKey: ""
    },
    requestChecksumCalculation: "WHEN_REQUIRED",
}
const client = new S3Client(clientParams);


const getObject = async () => {
    const getObjectParams = {
        Bucket: "test-bucket-s3-akash",
        Key: "uploads/image1.png"
    }
    const getCommand = new GetObjectCommand(getObjectParams);
    const url = await getSignedUrl(client, getCommand);
    return url
}


const putObject = async (filename, contentType) => {
    const putObjectParams = {
        Bucket: "test-bucket-s3-akash",
        Key: `uploads/${filename}`,
        ContentType: contentType
    }
    const putCommand = new PutObjectCommand(putObjectParams);
    const url = await getSignedUrl(client, putCommand);
    return url
}

const init = async () => {
    const res = await getObject();
    // const res = await putObject("image1.png", "image/png");
    console.log(res);
}

init()
