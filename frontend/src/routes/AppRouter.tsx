// src/routes/AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';



const AppRouter: React.FC = () => (
<Router>
      <Routes>
        {/* Pages publiques */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/help" element={<Help />} /> */}

        {/* Pages utilisateurs authentifiés */}
        {/* <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
        <Route path="/profile/edit" element={<PrivateRoute element={<EditProfile />} />} />
        <Route path="/friends" element={<PrivateRoute element={<Friends />} />} />
        <Route path="/friends/invite" element={<PrivateRoute element={<InviteFriends />} />} />
        <Route path="/my-creations" element={<PrivateRoute element={<MyCreations />} />} />
        <Route path="/notifications" element={<PrivateRoute element={<Notifications />} />} /> */}

        {/* Pages de gestion des histoires */}
        {/* <Route path="/stories/new" element={<PrivateRoute element={<NewStory />} />} />
        <Route path="/stories/:id/write" element={<PrivateRoute element={<WriteStory />} />} />
        <Route path="/stories/:id" element={<PrivateRoute element={<ViewStory />} />} />
        <Route path="/stories/:id/edit" element={<PrivateRoute element={<EditStory />} />} />
        <Route path="/stories/:id/comments" element={<PrivateRoute element={<StoryComments />} />} />
        <Route path="/stories/:id/contributions" element={<PrivateRoute element={<StoryContributions />} />} />
        <Route path="/stories/:id/history" element={<PrivateRoute element={<StoryHistory />} />} />
        <Route path="/stories/:id/notes" element={<PrivateRoute element={<StoryNotes />} />} />
        <Route path="/stories" element={<PrivateRoute element={<StoriesList />} />} />
        <Route path="/stories/:id/join" element={<PrivateRoute element={<JoinStory />} />} /> */}

        {/* Pages pour les défis / challenges */}
        {/* <Route path="/challenges" element={<PrivateRoute element={<ChallengesList />} />} />
        <Route path="/challenges/:id" element={<PrivateRoute element={<ViewChallenge />} />} />
        <Route path="/challenges/:id/join" element={<PrivateRoute element={<JoinChallenge />} />} /> */}

        {/* Pages de gestion de l’écriture collaborative */}
        {/* <Route path="/stories/:id/characters" element={<PrivateRoute element={<StoryCharacters />} />} />
        <Route path="/stories/:id/characters/:characterId" element={<PrivateRoute element={<CharacterSheet />} />} />
        <Route path="/stories/:id/chat" element={<PrivateRoute element={<StoryChat />} />} />
        <Route path="/stories/:id/call" element={<PrivateRoute element={<StoryCall />} />} /> */}

        {/* Pages liées au compte premium
        <Route path="/premium" element={<PrivateRoute element={<Premium />} />} />
        <Route path="/premium/resources" element={<PrivateRoute element={<PremiumResources />} />} /> */}

        {/* Page d'erreur 404 */}
        {/* <Route path="*" element={<NotFound />} />  */}
      </Routes>
    </Router>
);


export default AppRouter;