import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header
            className="flex w-full justify-between px-standard_pd 
        py-4  h-24 items-center text-xl  border-b"
        >
            <div className="flex text-2xl items-center">
                <Link href="/map">
                    <a>
                        <Image
                            src={require("assets/icon/화살표.svg")}
                            width={20}
                            height={20}
                            alt="arrow"
                        />
                    </a>
                </Link>
                <div className="ml-4">흥부하우스B동</div>
            </div>
            <div className="flex gap-4">
                <Image
                    src={require("assets/icon/하트_찜_X.svg")}
                    width={22}
                    height={22}
                    alt="heart"
                />
                <Image
                    src={require("assets/icon/공유.svg")}
                    width={22}
                    height={22}
                    alt="share"
                />
                <Image
                    src={require("assets/icon/더보기.svg")}
                    width={22}
                    height={22}
                    alt="three-dot"
                />
            </div>
        </header>
    );
}
