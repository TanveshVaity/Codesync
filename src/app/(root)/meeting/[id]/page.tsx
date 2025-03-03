"use client";

import { Loader } from "@/components/Loader";
import { MeetingSetup } from "@/components/MeetingSetup";
import useGetCallById from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function MeetingPage() {
    const { id } = useParams();
    const { isLoaded } = useUser();
    const { call, isCallLoading } = useGetCallById(id!);

    const [isSetupComplete, setIsSetupComplete] = useState(false);

    if (!isLoaded || isCallLoading) return <Loader />;

    if (!call) {
        return (
        <div className="h-screen flex items-center justify-center">
            <p className="text-2xl font-semibold">Meeting not found</p>
        </div>
        );
    }

    return (
        <StreamCall >
        <StreamTheme>
            {!isSetupComplete ? (
            <MeetingSetup/>
            ) : (
                <></>
            )}
        </StreamTheme>
        </StreamCall>
    );
}