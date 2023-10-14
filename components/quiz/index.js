import React from "react";
import Image from "next/image";

const Quiz = () => {
  return (
    <div className="bg-neu-yellow">
      <div className="group container w-custom-red bg-neu-white rounded-40 border border-black border-r-8 border-b-8 h-quiz-h mt-10">
        <div>
          <Image
            src="/images/ust-k.png"
            alt="images"
            height={18}
            width={1494}
          />
        </div>
        <div className="mt-6 flex justify-between">
          <div className="flex-none">
            <Image
              src="/images/sol.png"
              alt="images"
              height={762}
              width={100}
            />
          </div>

          <div className="flex-grow">
            <div className="flex justify-between items-center h-28 mt-5">
              <button className="ml-32">
                <Image
                  src="/images/x.png"
                  alt="images"
                  height={28}
                  width={28}
                />
              </button>
              <div className="mx-auto">
                <Image
                  src="/images/time.png"
                  alt="images"
                  height={110}
                  width={110}
                />
              </div>
            </div>

            {/* quiz soru */}
            <div className="flex-none h-60 bg-neu-orange w-10/12 mx-auto flex flex-row relative items-center justify-center mt-10 rounded-20 border border-black border-r-4 border-b-4">
              <div className="bg-neu-blue w-30 text-3xl absolute -top-4 -left-12 py-1 px-4 rounded-20 border border-black border-r-4 border-b-4">
                3/10
              </div>
              <p className="text-2xl font-bold text-black">
                Blockchain teknolojisinin temel özelliği nedir?
              </p>
              <div className="absolute -top-14 -right-14">
                <Image
                  src="/images/star.png"
                  alt="images"
                  height={121}
                  width={121}
                />
              </div>
            </div>
            {/* Şıklar */}
            <div className="w-10/12 mx-auto text-black flex flex-wrap justify-between">
              <div className="mt-6 flex-wrap space-y-6">
                <div className="flex w-520 bg-neu-red3 items-center rounded-20 border border-black border-r-4 border-b-4 space-x-2">
                  <div className="text-40 pl-4">A</div>
                  <div>Merkezi bir otorite tarafından kontrol edilir.</div>
                </div>
                <div className="flex w-520 bg-neu-pink3 items-center rounded-20 border border-black border-r-4 border-b-4 space-x-2">
                  <div className="text-40 pl-4">B</div>
                  <div>Tüm veriler açıkça görülebilir ve değiştirilebilir.</div>
                </div>
              </div>

              <div className="mt-6 flex-wrap space-y-6">
                <div className="flex w-520 bg-neu-purple3 items-center rounded-20 border border-black border-r-4 border-b-4 space-x-2">
                  <div className="text-40 pl-4">C</div>
                  <div>İşlemlerin hızını arttırır.</div>
                </div>
                <div className="flex w-520 bg-neu-blue3 items-center rounded-20 border border-black border-r-4 border-b-4 space-x-2">
                  <div className="text-40 pl-4">D</div>
                  <div>
                    İşlemlerin gizliliğini korur ve değişmez bir kayıt tutar.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row space-x-4">
              <div className="w-20 h-20 items-center justify-center rounded-20 border border-black border-r-4 border-b-4">
                <Image
                src="/images/spon1.png"
                alt="sponsor"
                width={52}
                height={34}
              />
              </div>
              <div className="w-20 h-20 rounded-20 border border-black border-r-4 border-b-4">
                <Image
                src="/images/spon2.png"
                alt="sponsor"
                width={40}
                height={40}
              />
              </div>
              <div className="w-20 h-20 rounded-20 border border-black border-r-4 border-b-4">
                <Image
                src="/images/spon3.png"
                alt="sponsor"
                width={46}
                height={38}
              />
              </div>
              <div className="w-20 h-20 rounded-20 border border-black border-r-4 border-b-4">
                <Image
                src="/images/spon4.png"
                alt="sponsor"
                width={40}
                height={40}
              />
              </div>
            </div>
          </div>

          <div className="flex-none">
            <Image
              src="/images/sag.png"
              alt="images"
              height={762}
              width={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
