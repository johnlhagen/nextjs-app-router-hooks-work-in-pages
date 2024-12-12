import {usePathname, useSearchParams} from "next/navigation";
import {useRouter} from "next/router";

export default () => {
    const appPathname = usePathname();
    const appSearchParams = useSearchParams();
    const pagesRouter = useRouter();
    console.log('appPathname', appPathname);
    console.log('appSearchParams', appSearchParams, appSearchParams?.toString());
    console.log('pagesRouter', pagesRouter);
    return <ul>
        <li>/src/pages/index</li>
        <li>searchParams: {appSearchParams}</li>
        <li>appPathName: {appPathname}</li>
    </ul>
}