import landingImage from "../assets/phone_image.png"
import appDownload from "../assets/appDownload.png"

const HomePage = () => {
    return(
        <div className="flex flex-col gap-12">
            <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl font-bold tracking-tight text-slate-600">
                    Quick bites, quicker delivery!
                </h1>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <img src={landingImage}/>
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-3xl tracking-tighter text-slate-600">
                        Order takeaway even faster!
                    </span>
                    <span>
                        Download the EatzExpress App for faster ordering and personalized recommendations.
                    </span>
                    <img src={appDownload} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomePage;