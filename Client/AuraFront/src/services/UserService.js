const users = [
    { email: 'admin@gmail.com', password: 'admin123', userType: 'admin' },
    { email: 'artist1.@gmail.com', password: 'artist123', userType: 'artist' },
    { email: 'client1@gmail.com', password: 'client123', userType: 'client' },
   ];
   
   export const authenticateUser = (username, password) => {
    const user = users.find(user => user.email === username && user.password === password);
    return user ? { success: true, userType: user.userType } : 
    { success: false };
   };