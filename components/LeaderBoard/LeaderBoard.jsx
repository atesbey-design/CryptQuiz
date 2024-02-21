import React from "react";
import Image from "next/image";

const Sponsor = [
  {
    sponsorName: "Truefeedback Quiz Yarışması",
  },
];

const leaderboardData = [
  {
    username: "0x2465176C461AfB316ebc773C61fAEe85A6515DAA",
    rank: 3,
    points: 90,
    imageSrc: "/images/ethiconprofile.png",
    bgColor: "bg-neu-brown",
    height: "h-20",
    borderColor: "border-neu-brown",
    fontSize: "text-5xl"
  },
  {
    username: "0x2465176C461AfB316ebc773C61fAEe85A6515DAA",
    rank: 1,
    points: 110,
    imageSrc: "/images/ethiconprofile.png",
    bgColor: "bg-neu-yellow3",
    height: "h-36",
    borderColor: "border-neu-yellow3",
    fontSize: "text-7xl"
  },
  {
    username: "0x2465176C461AfB316ebc773C61fAEe85A6515DAA",
    rank: 2,
    points: 100,
    imageSrc: "/images/ethiconprofile.png",
    bgColor: "bg-neu-gray",
    height: "h-28",
    borderColor: "border-neu-gray2",
    fontSize: "text-6xl"
  },
];

const LeaderBoardTop10 = [
    {
        username: "0xEF0274E31810C9Df02F98FAFDe0f841F4E66a1Cd",
        rank: 4,
        points: 80  ,
        imageSrc: "/images/ethiconprofile.png",
      },
      {
        username: "0xEFFSGDGDSF810C9Df02F98FAFDe0f841F4E66f13C",
        rank: 5,
        points: 75,
        imageSrc: "/images/ethiconprofile.png",
      },
      {
        username: "0x758b9D1B8262829FeF43b4535e979AC25F323122",
        rank: 6,
        points: 60,
        imageSrc: "/images/ethiconprofile.png",
      },
    {
        username: "0x179755E1B74fd8738e77388337A738D774E3B451",
        rank: 7,
        points: 50,
        imageSrc: "/images/ethiconprofile.png",
      },
      {
        username: "0x758b9D1B8262829FeF43b4535e979AC25F323122",
        rank: 8,
        points: 40,
        imageSrc: "/images/ethiconprofile.png",
      },
      {
        username: "0x377B40A4ab2B8bBc40c5175e7A89f79cDd80AD68",
        rank: 9,
        points: 20,
        imageSrc: "/images/ethiconprofile.png",
      },
      {
        username: "0x377B40A4ab2B8bBc40c5175e7A89f79cDd80AD68",
        rank: 10,
        points: 15,
        imageSrc: "/images/ethiconprofile.png",
      },
]
function formatString(inputString) {
  // İlk 4 karakteri al
  if (!inputString) return ""; // Null kontrolü ekleyin
  const firstFourCharacters = inputString.slice(0, 4);

  // Son 4 karakteri al
  const lastFourCharacters = inputString.slice(-4);

  // Ortasına üç nokta ekleyerek yeni string oluştur
  const resultString = `${firstFourCharacters}...${lastFourCharacters}`;

  return resultString;
}
const LeaderBoard = ({ sortedUsers }) => {
  const sponsorName = Sponsor[0].sponsorName;
  // İlk sıradaki leaderboardData'nın username özelliğini güncelle

    if(sortedUsers.length ==1)
    {
      leaderboardData[1].username = sortedUsers[0].username;
      leaderboardData[1].points = sortedUsers[0].score;
    }
    if(sortedUsers.length ==2)
    {
      leaderboardData[1].username = sortedUsers[0].username;
      leaderboardData[1].points = sortedUsers[0].score;
      leaderboardData[2].username = sortedUsers[1].username;
      leaderboardData[2].points = sortedUsers[1].score;
    }
    if(sortedUsers.length ==3)
    {
      leaderboardData[1].username = sortedUsers[0].username;
      leaderboardData[1].points = sortedUsers[0].score;
      leaderboardData[2].username = sortedUsers[1].username;
      leaderboardData[2].points = sortedUsers[1].score;
      leaderboardData[0].username = sortedUsers[2].username;
      leaderboardData[0].points = sortedUsers[2].score;
    }


    
  
   


  return (
    <div className="w-full h-full py-7 px-10 space-y-8">
      <h1 className="text-base lg:text-32 font-bold text-center">
        {sponsorName} Sonuçları
      </h1>




     


      <div className="flex flex-row justify-between space-x-8">
      {/* liderlik */}
      <div className="w-3/5 flex flex-col lg:flex-row space-x-12 justify-around">
        {leaderboardData.map((item, index) => (
          <div
            className={`flex flex-col w-1/5 space-y-5 mt-auto justify-center items-center `}
            key={index}
          >
            {/* profil resmi */}
            <div className="w-40 h-40">
              <Image
                src={item.imageSrc}
                alt="profile"
                width={160}
                height={160}
                className={`w-full h-full object-cover rounded-full border-8 ${item.borderColor}`}
              />
            </div>
            {/* kullanıcı adı */}
            <h1 className="text-2xl text-black font-bold text-center">
              {formatString(item.username)}
            </h1>
            {/* sıralama */}
            <div
              className={`w-44 ${item.height} flex items-center justify-center ${item.fontSize} text-white text-center py-6 font-bold rounded-20 ${item.bgColor} border border-black border-r-8 border-b-8`}
            >
              <span className="drop-shadow-[2px_2px_rgba(0,0,0,40)]">
                {item.rank}
              </span>
            </div>
            {/* puan */}
            <div className="bg-white w-44 text-center font-bold text-xl py-2 rounded-20 border  border-black border-r-8 border-b-8">
              {item.points} puan
            </div>
          </div>
        ))}
      </div>
      {/* top 10 */}
      <div className="w-2/5 bg-white flex flex-col justify-between rounded-20 space-y-2 border border-black border-r-4 border-b-4 p-3">
        <div className="space-y-2">
          <h2 className="text-xl font-bold font-lexend text-center">Leaderboards</h2>
          <div className="flex flex-row justify-around items-center bg-neu-orange rounded-10 py-1 border border-black border-r-4 border-b-4">
            <h3 className="font-bold text-base font-public">No</h3>
            <h3 className="font-bold text-base font-public">Profile</h3>
            <h3 className="font-bold text-base font-public">Username</h3>
            <h3 className="font-bold text-base font-public">Point</h3>
          </div>
        </div>
      {LeaderBoardTop10.map((item, index) => (
        <div key={index} className="flex flex-row justify-around items-center">
            <div className="font-medium text-base font-public">{item.rank}</div>
            <div className="w-10 h-10">
              <Image
                src={item.imageSrc}
                alt="profile"
                width={80}
                height={80}
                className="w-full h-full object-cover rounded-full border border-black border-r-2 border-b-2"              />
            </div>
            <div className="font-medium text-base font-public">{formatString(item.username)}</div>
            <div className="font-medium text-base font-public">{item.points}</div>
        </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default LeaderBoard