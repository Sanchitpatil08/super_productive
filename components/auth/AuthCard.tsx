import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { useTranslations } from "next-intl";


interface Props {
    signInCard?: boolean;
}


export const Authcard = ({signInCard}: Props ) => {
    const t = useTranslations("AUTH")
    return (
    <>
        <Card className="w-full sm:min-w-[28rem] sm:w-auto ">
            <CardHeader>
                <Image alt="" width={50} height={50} src ={"https://github.com/shadcn.png"}/>
                <CardTitle>
                    {signInCard? t("SIGN_IN.TITLE"): t("SIGN_UP.TITLE")}
                </CardTitle>

                <CardDescription>
                {signInCard? t("SIGN_IN.DESC"): t("SIGN_UP.DESC")}
                </CardDescription>
    
            </CardHeader>

            <
        </Card>
    </>
    );
}
