import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/pages/api/auth/[...nextauth]"; // Adjust path if necessary

import ProfileClientPage from "./ProfileClientPage";

const ProfilePage = async () => {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/auth/signin');
    }

    // The client component will handle its own loading states for interactive parts
    // and display the session data passed from here.
    return <ProfileClientPage initialSession={session} />;
};

export default ProfilePage;
