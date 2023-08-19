export default function Trust() {
  return (
    <section className="relative z-[10] mt-[-50px] pt-[165px] bg-black tablet:mt-[-160px] rounded-t-[80px]">
      <div className="relative z-[10] h-[100vh]">
        <h2 className="subtitle w-full tablet:w-[658px] mx-auto text-center">
          компанії які довіряють по всьому світу
        </h2>
        <div className="grid max-w-[1080px] mx-auto justify-center tablet:grid-cols-2 laptop:grid-cols-3 laptop:grid-rows-3 gap-[30px] laptop:gap-[65px] mt-[115px]">
          <img
            src="/images/trust/basecamp.png"
            alt="basecamp"
            className="w-[250px] mx-auto tablet:w-auto"
          />
          <img
            src="/images/trust/podium.png"
            alt="podium"
            className="w-[250px] mx-auto tablet:w-auto"
          />
          <img
            src="/images/trust/plaid.png"
            alt="plaid"
            className="w-[250px] mx-auto tablet:w-auto"
          />
          <img
            src="/images/trust/attentive.png"
            alt="attentive"
            className="w-[250px] mx-auto tablet:w-auto"
          />
          <img
            src="/images/trust/mailchimp.png"
            alt="mailchimp"
            className="w-[250px] mx-auto tablet:w-auto"
          />
          <img
            src="/images/trust/notion.png"
            alt="notion"
            className="w-[250px] mx-auto tablet:w-auto"
          />
          <img
            src="/images/trust/github.png"
            alt="github"
            className="tablet:col-span-2 laptop:col-span-1 laptop:col-start-2 w-[250px] tablet:w-auto mx-auto"
          />
        </div>
      </div>
      <div className="absolute top-[80px] left-[50%] translate-x-[-50%] w-[340px] h-[340px] tablet:w-[615px] tablet:h-[615px] laptop:w-[800px] laptop:h-[800px] circle1 center">
        <div className="w-[250px] h-[250px] tablet:w-[470px] tablet:h-[470px] laptop:w-[650px] laptop:h-[650px] circle2 center">
          <div className="w-[160px] h-[160px] tablet:w-[300px] tablet:h-[300px] laptop:w-[500px] laptop:h-[500px] circle3"></div>
        </div>
      </div>
    </section>
  );
}
