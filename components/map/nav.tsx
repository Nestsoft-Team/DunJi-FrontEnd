import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    return (
        <nav
            className="bg-white flex w-screen justify-between h-28
            items-center px-10 z-10 shadow-thick"
        >
            <div>
                <Link href="/">
                    <a>
                        <Image
                            src={require("../../image/map/home.jpg")}
                            alt="home"
                            width={40}
                            height={40}
                        ></Image>
                    </a>
                </Link>
            </div>
            <div>
                <Image
                    className="text-yellow"
                    src={require("../../image/map/heart_yellow.jpg")}
                    alt="heart"
                    width={40}
                    height={40}
                ></Image>
            </div>
            <div>
                <Image
                    className="text-yellow"
                    src={require("../../image/map/plus.jpg")}
                    alt="plus"
                    width={40}
                    height={40}
                ></Image>
            </div>
            <div>
                <Image
                    className="text-yellow"
                    src={require("../../image/map/talk.jpg")}
                    alt="talk"
                    width={40}
                    height={40}
                ></Image>
            </div>
            <div>
                <Image
                    className="text-yellow"
                    src={require("../../image/map/list.jpg")}
                    alt="list"
                    width={40}
                    height={40}
                ></Image>
            </div>
        </nav>
    );
}
