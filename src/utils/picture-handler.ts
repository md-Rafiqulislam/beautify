import { config } from "@/envConfig";
import { globalErrorHandler } from "@/lib/global-error-handler";
import { v2 as cloudinary } from "cloudinary";


// cloudinary config
cloudinary.config({
    cloud_name: config.cldnry.title,
    api_key: config.cldnry.key,
    api_secret: config.cldnry.secret,
});


// send picture to cloudinary
export const uploadPicture = async (file: File) => {
    try {
        // convert it in buffer
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // buffer to base64 uri
        const base64Data = buffer.toString("base64");
        const fileUri = `data:${file.type};base64,${base64Data}`;

        // upload
        const result = await cloudinary.uploader.upload(fileUri, {
            folder: "beautify",
            resource_type: "auto",
        });

        return { secure_url: result.secure_url };
    } catch (error) {
        return globalErrorHandler(error);
    }
};