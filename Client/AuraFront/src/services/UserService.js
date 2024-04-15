const users = [
    { username: 'admin@gmail.com', password: 'admin123', userType: 'admin' },
    { username: 'artist1.@gmail.com', password: 'artist123', userType: 'artist' },
    { username: 'client1@gmail.com', password: 'client123', userType: 'client' },
   ];
   
   export const authenticateUser = (username, password) => {
    const user = users.find(user => user.username === username && user.password === password);
    return user ? { success: true, userType: user.userType } : 
    { success: false };
   };