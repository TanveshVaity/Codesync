"use client";

import { Loader } from "@/components/Loader";
import useGetCallById from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { SpeakerLayout, StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useParams } from "next/navigation";
import { useState } from "react";
import MeetingSetup from "@/components/MeetingSetup";
import  MeetingRoom  from "@/components/MeetingRoom";

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
        <StreamCall call={call}>
            <StreamTheme>
                {!isSetupComplete ? (
                <MeetingSetup onSetupComplete={() => setIsSetupComplete(true)} />
                ) : (
                    <MeetingRoom />
                )}
            </StreamTheme>
        </StreamCall>
    );
}