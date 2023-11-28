export const uploadFiles = async (files: FileList) => {
    const uploadedImages: string[] = []
    for (const element of files) {
        const formData = new FormData()
        formData.append("file", element)
        formData.append(
            "upload_preset",
            process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string
        )
        try {
            const response = await fetch(
                process.env.NEXT_PUBLIC_CLOUDINARY_URL as string,
                {
                    method: "POST",
                    body: formData,
                }
            )
            const data = await response.json()
            console.log(data)
            uploadedImages.push(data.secure_url)
        } catch (error) {
            console.error("Error uploading file:", error)
        }
    }
    return uploadedImages
}