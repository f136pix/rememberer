import {Route, Routes} from "react-router-dom";
import HomePage from "@/_public/pages/HomePage.tsx";
import RegisterLayout from "@/_public/RegisterLayout.tsx";
import AuthPage from "@/_public/pages/AuthPage.tsx";
import Dashboard from "@/_secured/pages/Dashboard.tsx";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/home'} element={<HomePage/>}/>
            <Route element={<RegisterLayout/>}>
                <Route path={'/auth'} element={<AuthPage/>}/>
            </Route>
            {/*secure components*/}
            {/*<Route element={<RootLayout/>}>*/}
                <Route path={'/'} element={<Dashboard/>}/>
                {/*<Route path={'/explore'} element={<Explore/>}/>
                <Route path={'/saved'} element={<Saved/>}/>
                <Route path={'/all-users'} element={<AllUsers/>}/>
                <Route path={'/create-post'} element={<CreatePost/>}/>
                <Route path={'/update-post/:id'} element={<EditPost/>}/>
                <Route path={'/posts/:id'} element={<PostDetails/>}/>
                <Route path={'/profile/:id/*'} element={<Profile/>}/>
                <Route path={'/update-profile/:id'} element={<UpdateProfile/>}/>
                <Route path={'/liked-posts/:id'} element={<LikedPosts/>}/>
            </Route> */}
        </Routes>
    )

};