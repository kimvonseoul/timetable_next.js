import wrapper from "@/app/reducers/store";
import { SessionProvider } from "next-auth/react";

const App = ({ Component, pageProps: { session, ...pageProps } }: {
    Component: React.ComponentType<any>,
    pageProps: any
}) => {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
};

export default wrapper.withRedux(App);
