import { ImageResponse } from "next/og";
import { FaStar } from "react-icons/fa6";

export const size = {
    width: 64,
    height: 64,
};

export const contentType = "image/png";

export default function Icon() {
    return new ImageResponse(
        (
            <div tw="flex h-full w-full items-center justify-center bg-transparent">
                <FaStar color="#2563eb" size={64} />
            </div>
        ),
        {
            ...size,
        }
    );
}