import React from "react";
import ProfileImage from "@/components/ProfileImage/ProfileImage";
import RecentQuizes from "@/components/RecentQuizes/RecentQuizes";
import StatsCup from "@/components/StatsCup/StatsCup";

export default function Page() {
  return (
    <div className="flex flex-col w-[80vw] h-[90vh] lg:h-[80vh] space-y-8">
      {/* profil resmi ve recent quizes */}
      <div className="flex flex-row w-full h-1/2 space-x-8">
        {/* profil resmi */}
        <ProfileImage />
        {/* recent quizes */}
        <RecentQuizes />
      </div>
      {/* Stats */}
      <StatsCup />
    </div>
  );
}
