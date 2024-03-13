import {Route, Routes} from "react-router-dom";
import AuthPage from "@/views/_public/pages/AuthPage.tsx";
import HomePage from "@/views/_public/pages/HomePage.tsx";
import RegisterLayout from "@/views/_public/RegisterLayout.tsx";
import {SecureLayout, Dashboard, Profile, TasksDashboard, TeamsDashboard} from "@/views/_secured/exporter.tsx"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path={'/home'} element={<HomePage/>}/>
            <Route element={<RegisterLayout/>}>
                <Route path={'/auth'} element={<AuthPage/>}/>
            </Route>
            {/*secure components*/}
            <Route element={<SecureLayout/>}>
                <Route path={'/'} element={<Dashboard/>}/>
                <Route path={'/profile/:id'} element={<Profile/>}/>
                <Route path={'/tasks/:id'} element={<TasksDashboard/>}/>
                <Route path={'/teams/:id'} element={<TeamsDashboard/>}/>
                {/*<Route path={'/explore'} element={<Explore/>}/>
                <Route path={'/saved'} element={<Saved/>}/>
                <Route path={'/all-users'} element={<AllUsers/>}/>
                <Route path={'/create-post'} element={<CreatePost/>}/>
                <Route path={'/update-post/:id'} element={<EditPost/>}/>
                <Route path={'/posts/:id'} element={<PostDetails/>}/>
                <Route path={'/profile/:id/*'} element={<Profile/>}/>
                <Route path={'/update-profile/:id'} element={<UpdateProfile/>}/>
                <Route path={'/liked-posts/:id'} element={<LikedPosts/>}/>
             */}
            </Route>
        </Routes>
    );

};