"use client"

import * as z from "zod";
import { Heading } from "@/components/heading";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";

const ConversationPage = () => {
    const form = useForm({
        defaultValues:{
            prompt: " "
        }        
    });
    return ( 
        <div>
            <Heading
                title="Conversation"
                description="Our most advanced conversation."
                icon={MessageSquare}
                iconColor="text-violet-500"
                bgColor="bg-violet-5000/10"
            />
            <div className="px-4 lg:px-8 ">

            </div>

        </div>
     );
}
 
export default ConversationPage;