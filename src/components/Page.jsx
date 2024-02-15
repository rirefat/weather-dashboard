import Header from "./Header/Header";
import WeatherBoard from "./WeatherBoard/WeatherBoard";
import bodyBG from '../assets/body-bg.png';

const Page = () => {
    return (
        <main className={`bg-body font-[Roboto] text-light bg-[${bodyBG}] bg-no-repeat bg-cover h-screen grid place-items-center`}>
            <Header/>
            <WeatherBoard/>
        </main>
    );
};

export default Page;