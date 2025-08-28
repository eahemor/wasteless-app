import React, { useState } from 'react';
import {
  GraduationCap, Globe, Recycle, Users, Home, BarChart3,
  Trophy, User, Plus, Target, LogOut, CheckCircle, Award, TrendingUp, BookOpen,
  Crown 
} from 'lucide-react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (userData) => {
    setCurrentUser(userData);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  console.log('App currentUser state:', currentUser); 
  console.log('App isLoggedIn state:', isLoggedIn); 


  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto">
      {!isLoggedIn ? (
        <LoginScreen onLogin={handleLogin} />
      ) : (
        <Dashboard user={currentUser} onLogout={handleLogout} />
      )}
    </div>
  );
}

// LOG IN AND VERIFICATION SECTION

const LoginScreen = ({ onLogin }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [pendingVerification, setPendingVerification] = useState(null);
  const [showVerificationSuccess, setShowVerificationSuccess] = useState(false);
  
  // Store users in localStorage to persist between sessions
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('wasteless-users');
    if (savedUsers) {
      return JSON.parse(savedUsers);
    }
    
  // Default demo users (already verified)
  return [
{ 
  id: '1', 
  email: 'emma.chen@greenwich.ac.uk',
  password: 'demo123',
  name: 'Emma Chen', 
  university: 'University of Greenwich', 
  points: 1250, 
  badges: ['🌱', '♻️', '🏆'],
  country: 'China',
  course: 'MSc Sustainable Engineering',
  year: 'Year 2',
  accommodation: 'Daniel Defoe Building',
  isVerified: true,
  registeredAt: new Date().toISOString()
},
{ 
  id: '2', 
  email: 'merinda.owusu@greenwich.ac.uk',
  password: 'demo1234',
  name: 'Merinda Owusu', 
  university: 'University of Greenwich', 
  points: 65, 
  badges: ['🌱', '♻️'],
  country: 'Ghana',
  course: 'MSc Business Management',
  year: 'Year 3',
  accommodation: 'Blackheath Halls',
  isVerified: true,
  registeredAt: new Date().toISOString()
},
  
  {
    id: '3',
    email: 'lesley.sally@greenwich.ac.uk',
    password: 'test123',
    name: 'Lesley Sally',
    university: 'University of Greenwich',
    points: 95,
    badges: [],
    country: 'TBD',
    course: 'Research Participant',
    year: 'Testing',
    accommodation: 'N/A',
    isVerified: true,
    registeredAt: new Date().toISOString()
  },
  {
    id: '4',
    email: 'francis.yeboah@greenwich.ac.uk',
    password: 'test123',
    name: 'Francis Yeboah',
    university: 'University of Greenwich',
    points: 140,
    badges: [],
    country: 'Ghana',
    course: 'Research Participant',
    year: 'Testing',
    accommodation: 'N/A',
    isVerified: true,
    registeredAt: new Date().toISOString()
  },
  {
    id: '5',
    email: 'karen.davis@greenwich.ac.uk',
    password: 'test123',
    name: 'Karen Davis',
    university: 'University of Greenwich',
    points: 125,
    badges: [],
    country: 'TBD',
    course: 'PhD in Sustainability',
    year: 'Testing',
    accommodation: 'N/A',
    isVerified: true,
    registeredAt: new Date().toISOString()
  },
  {
    id: '6',
    email: 'francisca.Nantwi@greenwich.ac.uk',
    password: 'test123',
    name: 'Francisca Nantwi',
    university: 'University of Greenwich',
    points: 125,
    badges: [],
    country: 'TBD',
    course: 'Postgraduate',
    year: 'Testing',
    accommodation: 'N/A',
    isVerified: true,
    registeredAt: new Date().toISOString()
  },
  {
    id: '7',
    email: 'sharon.jackson@greenwich.ac.uk',
    password: 'test123',
    name: 'Sharon Jackson',
    university: 'University of Greenwich',
    points: 150,
    badges: [],
    country: 'India',
    course: 'Research Participant',
    year: 'Testing',
    accommodation: 'N/A',
    isVerified: true,
    registeredAt: new Date().toISOString()
  },
  {
    id: '8',
    email: 'hillary.jackson@greenwich.ac.uk',
    password: 'test123',
    name: 'Hillary Jackson',
    university: 'University of Greenwich',
    points: 130,
    badges: [],
    country: 'Ireland',
    course: 'Research Participant',
    year: 'Testing',
    accommodation: 'N/A',
    isVerified: true,
    registeredAt: new Date().toISOString()
  },
  {
    id: '9',
    email: 'adolf.golden@greenwich.ac.uk',
    password: 'test123',
    name: 'Adolf Golden',
    university: 'University of Greenwich',
    points: 120,
    badges: [],
    country: 'Nigeria',
    course: 'Business Administration',
    year: '2',
    accommodation: 'N/A',
    isVerified: true,
    registeredAt: new Date().toISOString()
  },
  {
    id: '10',
    email: 'barbara.jones@greenwich.ac.uk',
    password: 'test123',
    name: 'Barbara Jones',
    university: 'University of Greenwich',
    points: 130,
    badges: [],
    country: 'Spain',
    course: 'Research Participant',
    year: 'Testing',
    accommodation: 'N/A',
    isVerified: true,
    registeredAt: new Date().toISOString()
  },
  {
    id: '11',
    email: 'blessing.fames@greenwich.ac.uk',
    email: 'participant9@testing.com',
    password: 'test123',
    name: 'Blessing Fames',
    university: 'University of Greenwich',
    points: 130,
    badges: [],
    country: 'India',
    course: 'Research Participant',
    year: 'Testing',
    accommodation: 'N/A',
    isVerified: true,
    registeredAt: new Date().toISOString()
  },
  {
    id: '12',
    email: 'giulia.lar@greenwich.ac.uk',
    password: 'test123',
    name: 'Giulia Lar',
    university: 'University of Greenwich',
    points: 150,
    badges: [],
    country: 'Germany',
    course: 'Research Participant',
    year: 'Testing',
    accommodation: 'N/A',
    isVerified: true,
    registeredAt: new Date().toISOString()
  },
  {
    id: '13',
    email: 'daniella.agyeman@greenwich.ac.uk',
    password: 'test123',
    name: 'Daniella Agyeman',
    university: 'University of Greenwich',
    points: 75,
    badges: [],
    country: 'Congo',
    course: 'Research Participant',
    year: 'Testing',
    accommodation: 'N/A',
    isVerified: true,
    registeredAt: new Date().toISOString()
  },
  {
    id: '14',
    email: 'tracy.agyeman@greenwich.ac.uk',
    password: 'test123',
    name: 'Tracy Agyeman',
    university: 'University of Greenwich',
    points: 100,
    badges: [],
    country: 'UK',
    course: 'Research Participant',
    year: 'Testing',
    accommodation: 'N/A',
    isVerified: true,
    registeredAt: new Date().toISOString()
  },
  {
    id: '15',
    email: 'participant13@testing.com',
    password: 'test123',
    name: 'Test Participant 13',
    university: 'University of Greenwich',
    points: 0,
    badges: [],
    country: 'TBD',
    course: 'Research Participant',
    year: 'Testing',
    accommodation: 'N/A',
    isVerified: true,
    registeredAt: new Date().toISOString()
  },
  {
    id: '16',
    email: 'participant14@testing.com',
    password: 'test123',
    name: 'Test Participant 14',
    university: 'University of Greenwich',
    points: 0,
    badges: [],
    country: 'TBD',
    course: 'Research Participant',
    year: 'Testing',
    accommodation: 'N/A',
    isVerified: true,
    registeredAt: new Date().toISOString()
  },
  {
    id: '17',
    email: 'participant15@testing.com',
    password: 'test123',
    name: 'Test Participant 15',
    university: 'University of Greenwich',
    points: 0,
    badges: [],
    country: 'TBD',
    course: 'Research Participant',
    year: 'Testing',
    accommodation: 'N/A',
    isVerified: true,
    registeredAt: new Date().toISOString()
  },
  {
    id: '18',
    email: 'participant16@testing.com',
    password: 'test123',
    name: 'Test Participant 16',
    university: 'University of Greenwich',
    points: 0,
    badges: [],
    country: 'TBD',
    course: 'Research Participant',
    year: 'Testing',
    accommodation: 'N/A',
    isVerified: true,
    registeredAt: new Date().toISOString()
  },
  {
    id: '19',
    email: 'participant17@testing.com',
    password: 'test123',
    name: 'Test Participant 17',
    university: 'University of Greenwich',
    points: 0,
    badges: [],
    country: 'TBD',
    course: 'Research Participant',
    year: 'Testing',
    accommodation: 'N/A',
    isVerified: true,
    registeredAt: new Date().toISOString()
  },
  {
    id: '20',
    email: 'participant18@testing.com',
    password: 'test123',
    name: 'Test Participant 18',
    university: 'University of Greenwich',
    points: 0,
    badges: [],
    country: 'TBD',
    course: 'Research Participant',
    year: 'Testing',
    accommodation: 'N/A',
    isVerified: true,
    registeredAt: new Date().toISOString()
  },
  {
    id: '21',
    email: 'participant19@testing.com',
    password: 'test123',
    name: 'Test Participant 19',
    university: 'University of Greenwich',
    points: 0,
    badges: [],
    country: 'TBD',
    course: 'Research Participant',
    year: 'Testing',
    accommodation: 'N/A',
    isVerified: true,
    registeredAt: new Date().toISOString()
  },
  {
  id: '22',
  email: 'participant20@testing.com',
  password: 'test123',
  name: 'Test Participant 20',
  university: 'University of Greenwich',
  points: 0,
  badges: [],
  country: 'TBD',
  course: 'Research Participant',
  year: 'Testing',
  accommodation: 'N/A',
  isVerified: true,
  registeredAt: new Date().toISOString()
} // NO comma after the last item
]; // Close the array
}); // Close the function

  // Pending verification users (not yet verified)
  const [pendingUsers, setPendingUsers] = useState(() => {
    const savedPending = localStorage.getItem('wasteless-pending-users');
    return savedPending ? JSON.parse(savedPending) : [];
  });

  // Login form state
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // Registration form state
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    course: '',
    year: '',
    accommodation: '',
    isInternational: false,
    agreeTerms: false
  });

  // Available options for dropdowns
  const courses = [
    'MSc Business Analytics',
    'BSc Business Management', 
    'MSc Computer Science',
    'BSc Environmental Science',
    'MSc Data Analytics',
    'BSc International Business',
    'MSc Project Management',
    'BSc Data Science',
    'MSc Marketing Staretegy',
    'BSc Architecture'
  ];

  const accommodations = [
    'Medway Campus Accommodation',
    'Blackheath Halls',
    'Greenwich Campus Accommodation',
    'Avery Hill Accommodation',
    'Private Accommodation',
    'Living at Home',
    'Other University Accommodation'
  ];

  const academicYears = [
    'Year 1',
    'Year 2', 
    'Year 3',
    'Year 4',
    'Masters Year 1',
    'Masters Year 2',
    'PhD'
  ];

  // Save users to localStorage
  const saveUsers = (newUsers) => {
    setUsers(newUsers);
    localStorage.setItem('wasteless-users', JSON.stringify(newUsers));
  };

  // Save pending users to localStorage
  const savePendingUsers = (newPendingUsers) => {
    setPendingUsers(newPendingUsers);
    localStorage.setItem('wasteless-pending-users', JSON.stringify(newPendingUsers));
  };

  // Handle login
  const handleLogin = (e) => {
    e.preventDefault();
    
    // Check if user exists and is verified
    const user = users.find(u => 
      u.email.toLowerCase() === loginData.email.toLowerCase() && 
      u.password === loginData.password &&
      u.isVerified
    );
    
    // Check if user is pending verification
    const pendingUser = pendingUsers.find(u => 
      u.email.toLowerCase() === loginData.email.toLowerCase()
    );
    
    if (user) {
      onLogin(user);
    } else if (pendingUser) {
      alert(`Your account is not yet verified. Please check your email (${pendingUser.email}) for the verification link, or use the verification button to complete setup.`);
      setPendingVerification(pendingUser);
    } else {
      alert(`Login failed. Please check your credentials or register a new account.\n\nDemo accounts:\n- emma.chen@greenwich.ac.uk\n- ahmed.hassan@greenwich.ac.uk\nPassword: demo123`);
    }
  };

  // Handle registration
  const handleRegistration = (e) => {
    e.preventDefault();
    
    // Validation
    if (!registerData.email.endsWith('@greenwich.ac.uk')) {
      alert('Please use your University of Greenwich email address (@greenwich.ac.uk)');
      return;
    }
    
    if (registerData.password !== registerData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    if (!registerData.agreeTerms) {
      alert('Please agree to the Terms and Conditions');
      return;
    }

    // Check if email already exists (verified or pending)
    const existingUser = users.find(u => u.email.toLowerCase() === registerData.email.toLowerCase());
    const existingPending = pendingUsers.find(u => u.email.toLowerCase() === registerData.email.toLowerCase());
    
    if (existingUser) {
      alert('An account with this email already exists and is verified. Please login instead.');
      return;
    }
    
    if (existingPending) {
      alert('An account with this email is pending verification. Please check your email or use the verification link.');
      setPendingVerification(existingPending);
      return;
    }

    // Create new pending user
    const newPendingUser = {
      id: Date.now().toString(),
      email: registerData.email,
      password: registerData.password,
      name: `${registerData.firstName} ${registerData.lastName}`,
      university: 'University of Greenwich',
      points: 0,
      badges: [],
      country: registerData.country,
      course: registerData.course,
      year: registerData.year,
      accommodation: registerData.accommodation,
      isInternational: registerData.isInternational,
      isVerified: false,
      registeredAt: new Date().toISOString(),
      verificationToken: Math.random().toString(36).substring(2, 15)
    };

    // Add to pending users
    const updatedPendingUsers = [...pendingUsers, newPendingUser];
    savePendingUsers(updatedPendingUsers);
    
    // Show verification screen
    setPendingVerification(newPendingUser);
  };

  // Handle email verification
  const handleEmailVerification = () => {
    if (!pendingVerification) return;
    
    // Move user from pending to verified
    const verifiedUser = {
      ...pendingVerification,
      isVerified: true,
      verifiedAt: new Date().toISOString()
    };
    
    // Add to verified users
    const updatedUsers = [...users, verifiedUser];
    saveUsers(updatedUsers);
    
    // Remove from pending users
    const updatedPendingUsers = pendingUsers.filter(u => u.id !== pendingVerification.id);
    savePendingUsers(updatedPendingUsers);
    
    // Show success message
    setShowVerificationSuccess(true);
    
    // Auto-login after 2 seconds
    setTimeout(() => {
      setShowVerificationSuccess(false);
      setPendingVerification(null);
      onLogin(verifiedUser);
    }, 2000);
  };

  // Email verification pending screen
  if (pendingVerification) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
          <div className="text-center mb-8">
            <div className="bg-yellow-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Verify Your Email</h1>
            <p className="text-gray-600 mt-2">Check your university email</p>
          </div>

          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">📧</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-blue-800 mb-2">Verification Email Sent!</h3>
                  <p className="text-sm text-blue-700 mb-3">
                    We've sent a verification link to:
                  </p>
                  <div className="bg-white rounded p-2 border">
                    <code className="text-sm font-mono text-blue-600">{pendingVerification.email}</code>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-2">📋 Next Steps:</h4>
              <ol className="text-sm text-yellow-700 space-y-1 list-decimal list-inside">
                <li>Check your university email inbox</li>
                <li>Look for email from "WasteLess - University of Greenwich"</li>
                <li>Click the "Verify Account" button in the email</li>
                <li>Return here to complete setup</li>
              </ol>
            </div>

            <div className="border-t pt-4">
              <p className="text-sm text-gray-600 text-center mb-4">
                For demo purposes, click below to simulate email verification:
              </p>
              
              <button
                onClick={handleEmailVerification}
                className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-all flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>✅ Simulate Email Verification</span>
              </button>
            </div>

            <div className="text-center">
              <button
                onClick={() => setPendingVerification(null)}
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                ← Back to login
              </button>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600 text-center">
              <strong>Security Note:</strong> Email verification ensures only genuine University of Greenwich students can access the WasteLess platform.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Verification success screen
  if (showVerificationSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
          <div className="text-center">
            <div className="bg-green-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to WasteLess App! 🎉</h1>
            <p className="text-gray-600 mb-4">Your account has been verified successfully</p>
            
            <div className="bg-green-50 rounded-lg p-4 border border-green-200 mb-4">
              <p className="text-green-700 text-sm">
                <strong>{pendingVerification?.name}</strong><br/>
                Your University of Greenwich account is now active!
              </p>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-600"></div>
              <span className="text-sm">Logging you in...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Rest of the login system (login screen, registration screen, main screen)
  // ... (same as before, but I'll include the key screens)

  if (isLoggingIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
          <div className="text-center mb-8">
            <div className="bg-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Recycle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">WasteLess App</h1>
            <p className="text-gray-600 mt-2">"Turning Trash Into Treasure"</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                University Email
              </label>
              <input
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                placeholder="your.name@greenwich.ac.uk"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-all"
            >
              Login to WasteLess
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLoggingIn(false)}
              className="text-primary hover:underline text-sm"
            >
              ← Back to options
            </button>
          </div>

          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600 text-center">
              <strong>Demo Accounts:</strong><br/>
              emma.chen@greenwich.ac.uk<br/>
              ahmed.hassan@greenwich.ac.uk<br/>
              Password: demo123
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (isRegistering) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 max-h-screen overflow-y-auto">
          <div className="text-center mb-6">
            <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 shadow-lg">
              <Recycle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">Join WasteLess</h1>
            <p className="text-gray-600 text-sm">University of Greenwich Students</p>
          </div>

          <form onSubmit={handleRegistration} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  value={registerData.firstName}
                  onChange={(e) => setRegisterData({...registerData, firstName: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  value={registerData.lastName}
                  onChange={(e) => setRegisterData({...registerData, lastName: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">University Email</label>
              <input
                type="email"
                value={registerData.email}
                onChange={(e) => setRegisterData({...registerData, email: e.target.value})}
                placeholder="your.name@greenwich.ac.uk"
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary text-sm"
                required
              />
              {registerData.email && !registerData.email.endsWith('@greenwich.ac.uk') && (
                <p className="text-red-500 text-xs mt-1">Must be a Greenwich university email</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({...registerData, password: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm</label>
                <input
                  type="password"
                  value={registerData.confirmPassword}
                  onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
              <select
                value={registerData.course}
                onChange={(e) => setRegisterData({...registerData, course: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary text-sm"
                required
              >
                <option value="">Select your course</option>
                {courses.map(course => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Academic Year</label>
                <select
                  value={registerData.year}
                  onChange={(e) => setRegisterData({...registerData, year: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary text-sm"
                  required
                >
                  <option value="">Select year</option>
                  {academicYears.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <input
                  type="text"
                  value={registerData.country}
                  onChange={(e) => setRegisterData({...registerData, country: e.target.value})}
                  placeholder="e.g. United Kingdom"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Accommodation</label>
              <select
                value={registerData.accommodation}
                onChange={(e) => setRegisterData({...registerData, accommodation: e.target.value})}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary text-sm"
                required
              >
                <option value="">Select accommodation</option>
                {accommodations.map(acc => (
                  <option key={acc} value={acc}>{acc}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="international"
                checked={registerData.isInternational}
                onChange={(e) => setRegisterData({...registerData, isInternational: e.target.checked})}
                className="w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="international" className="text-sm text-gray-700">
                I am an international student
              </label>
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                checked={registerData.agreeTerms}
                onChange={(e) => setRegisterData({...registerData, agreeTerms: e.target.checked})}
                className="w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
                required
              />
              <label htmlFor="terms" className="text-xs text-gray-700">
                I agree to the Terms and Conditions and Privacy Policy
              </label>
            </div>

            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <div className="flex items-start space-x-2">
                <div className="text-blue-500 mt-0.5">📧</div>
                <p className="text-xs text-blue-700">
                  <strong>Email Verification Required:</strong> After registration, check your university email for a verification link to activate your account.
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-all"
            >
              Create Account & Send Verification
            </button>
          </form>

          <div className="mt-4 text-center">
            <button
              onClick={() => setIsRegistering(false)}
              className="text-primary hover:underline text-sm"
            >
              ← Back to options
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main login/register selection screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="bg-primary rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg">
            <Recycle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800">WasteLess App</h1>
          <p className="text-gray-600 mt-2">"Turning Trash Into Treasure"</p>
        </div>

        <div className="flex items-center justify-center mb-4 p-3 bg-blue-50 rounded-lg">
          <GraduationCap className="w-5 h-5 text-blue-600 mr-2" />
          <span className="text-blue-800 font-medium">University of Greenwich</span>
        </div>

        <div className="flex items-center justify-center mb-4 p-3 bg-green-50 rounded-lg">
          <Globe className="w-5 h-5 text-green-600 mr-2" />
          <span className="text-green-800 text-sm">International Student Friendly</span>
        </div>

        <div className="flex items-center justify-center mb-6 p-3 bg-yellow-50 rounded-lg">
          <Users className="w-5 h-5 text-yellow-600 mr-2" />
          <span className="text-yellow-800 text-sm">85% willing to change habits</span>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => setIsLoggingIn(true)}
            className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-all"
          >
            Login with University Account
          </button>

          <button
            onClick={() => setIsRegistering(true)}
            className="w-full bg-white text-primary border-2 border-primary py-3 rounded-lg font-semibold hover:bg-green-50 transition-all"
          >
            Register New Account
          </button>
        </div>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-600 text-center">
            <strong>Secure Registration:</strong> Email verification required for all new accounts
            <br />
            <strong>Research Impact:</strong> Based on 23 international student interviews
            <br />
            <strong>Designed by:</strong> Ebenezer Ahemor
          </p>
        </div>
      </div>
    </div>
  );
};

const Dashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [currentUser, setCurrentUser] = useState(user);

    // DEBUGGING
  console.log('Dashboard received user:', user);
  console.log('Dashboard currentUser state:', currentUser);
  console.log('Points in header should be:', currentUser?.points);

  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'log', label: 'Log', icon: Plus },
      { id: 'learn', label: 'Learn', icon: BookOpen },
    { id: 'stats', label: 'Stats', icon: BarChart3 },
    { id: 'leaderboard', label: 'Leaders', icon: Trophy },
    { id: 'profile', label: 'Profile', icon: User },
  ];

    const handleUpdatePoints = (newPoints) => {
    setCurrentUser(prevUser => ({
      ...prevUser,
      points: prevUser.points + newPoints
    }));
  };

  const renderContent = () => {
  switch (activeTab) {
    case 'home':
      return <HomeContent user={currentUser} />;
    case 'log':
      return <WasteLogger user={currentUser} />;
    case 'learn':
      return <Education user={currentUser} onUpdatePoints={handleUpdatePoints} />;
    case 'stats':
      return <Analytics user={currentUser} />;
    case 'leaderboard':
      return <Leaderboard user={currentUser} />;
    case 'profile':
      return <Profile user={currentUser} onLogout={onLogout} />;
    default:
      return <HomeContent user={currentUser} />;
  }
};


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-800">WasteLess</h1>
              <p className="text-sm text-gray-600">Welcome, {user.name}</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-lg font-bold text-primary">{currentUser.points}</div>
                <div className="text-xs text-gray-500">points</div>
              </div>
              <button onClick={onLogout} className="p-2 text-gray-500 hover:text-gray-700">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-20">
        {renderContent()}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg max-w-md mx-auto">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-2 text-center transition-all ${
                activeTab === tab.id
                  ? 'text-primary border-t-2 border-primary bg-green-50'
                  : 'text-gray-500'
              }`}
            >
              <tab.icon className="w-5 h-5 mx-auto mb-1" />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};


const VerificationSteps = ({ activeStep = 0 }) => {
  const steps = [
    { icon: '📸', label: 'Photo', id: 0 },
    { icon: '📍', label: 'Location', id: 1 },
    { icon: '🏷️', label: 'QR Code', id: 2 }
  ];

  return (
    <div className="grid grid-cols-3 gap-3 my-4">
      {steps.map((step) => (
        <div 
          key={step.id}
          className={`text-center p-3 rounded-lg border-2 transition-all ${
            step.id <= activeStep 
              ? 'bg-green-50 border-green-500' 
              : 'bg-gray-50 border-gray-300'
          }`}
        >
          <div className="text-2xl mb-2">{step.icon}</div>
          <div className="text-sm font-medium">{step.label}</div>
          {step.id <= activeStep && (
            <div className="text-xs text-green-600 mt-1">✓</div>
          )}
        </div>
      ))}
    </div>
  );
};


const HomeContent = ({ user }) => {
  const defaultUser = {
    name: 'Demo User',
    points: 1250,
    badges: ['🌱', '♻️', '🏆']
  };
  
  const currentUser = user || defaultUser;
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [showBadgeUnlock, setShowBadgeUnlock] = useState(false);
  const [verificationStep, setVerificationStep] = useState(0);
  const [currentLevel] = useState(Math.floor(currentUser.points / 500) + 1);
  const [streakCount] = useState(15);
  const [isOnFire] = useState(streakCount >= 7);

  const calculateBadgeProgress = (badge) => {
  const rankBasedBadges = ['leader', 'top3', 'risingstar']; 
  
  if (rankBasedBadges.includes(badge.id)) {
    // For rank-based badges: lower rank number = better position
    if (badge.progress <= badge.target) {
      return 100; // Already achieved target
    }
    // Calculate progress as percentage toward target rank
    const maxPossibleRank = 8; // Assuming 8 total participants
    const progressPercent = Math.max(0, ((maxPossibleRank - badge.progress) / (maxPossibleRank - badge.target)) * 100);
    return Math.min(100, progressPercent);
  } else {
    // For count-based badges: standard calculation
    return Math.min(100, (badge.progress / badge.target) * 100);
  }
};

  const badgeSystem = {
    unlocked: [
      { 
        id: 'starter', 
        emoji: '🌱', 
        name: 'Eco Starter', 
        description: 'Logged first waste item',
        rarity: 'common',
        pointsEarned: 50,
        unlockedDate: '2 weeks ago'
      },
      { 
        id: 'recycler', 
        emoji: '♻️', 
        name: 'Recycling Hero', 
        description: 'Recycled 10 items correctly',
        rarity: 'common',
        pointsEarned: 100,
        unlockedDate: '1 week ago'
      },
      { 
        id: 'champion', 
        emoji: '🏆', 
        name: 'Waste Champion', 
        description: 'Reached 1000 points',
        rarity: 'rare',
        pointsEarned: 200,
        unlockedDate: '3 days ago'
      }
    ],
    nextToUnlock: [
  { 
    id: 'speedster', 
    emoji: '⚡', 
    name: 'Speed Logger', 
    description: 'Log 5 items in one day',
    progress: 3,
    target: 5,
    rarity: 'uncommon',
    reward: 150
  },
  { 
    id: 'top3', 
    emoji: '🥉', 
    name: 'Top 3 Finisher', 
    description: 'Reach top 3 on leaderboard',
    progress: 5,  // Currently rank #5
    target: 3,    // Need to reach rank #3
    rarity: 'rare',
    reward: 300
  },
  { 
    id: 'risingstar', 
    emoji: '⭐', 
    name: 'Rising Star', 
    description: 'Climb 5 ranks in one week',
    progress: 7,  // Started at rank #7
    target: 2,    // Need to reach rank #2 (climbed 5 ranks)
    rarity: 'epic',
    reward: 400
  },
  { 
    id: 'warrior', 
    emoji: '🌍', 
    name: 'Eco Warrior', 
    description: 'Maintain 30-day streak',
    progress: 15,
    target: 30,
    rarity: 'epic',
    reward: 500
  },
  { 
    id: 'leader', 
    emoji: '👑', 
    name: 'Leaderboard King', 
    description: 'Reach #1 on leaderboard',
    progress: 2,
    target: 1,
    rarity: 'legendary',
    reward: 1000
  }
],
  };

  // Level progression system
  const levelProgress = {
    current: currentLevel,
    pointsInLevel: currentUser.points % 500,
    pointsToNext: 500 - (currentUser.points % 500),
    nextLevelReward: currentLevel < 5 ? 100 : currentLevel < 10 ? 200 : 500
  };

  // Simulate level up for demo
  const triggerLevelUp = () => {
    setShowLevelUp(true);
    setTimeout(() => setShowLevelUp(false), 3000);
  };

  // Simulate badge unlock for demo
  const triggerBadgeUnlock = () => {
    setShowBadgeUnlock(true);
    setTimeout(() => setShowBadgeUnlock(false), 3000);
  };


const nextVerificationStep = () => {
  if (verificationStep < 2) {
    setVerificationStep(verificationStep + 1);
  } else {
    setVerificationStep(0);
    setShowBadgeUnlock(true);
  }
};

const resetVerification = () => {
  setVerificationStep(0);
};

const getVerificationStepText = () => {
  switch(verificationStep) {
    case 0: return 'Take Disposal Photo';
    case 1: return 'Verify GPS Location'; 
    case 2: return 'Scan Bin QR Code';
    default: return 'Photo Verification';
  }
};

const getVerificationDescription = () => {
  switch(verificationStep) {
    case 0: return 'Position your waste item above the bin and take a clear photo.';
    case 1: return 'GPS confirms you are within 5 meters of the bin.';
    case 2: return 'Scan the QR code to verify correct bin type.';
    default: return 'Start verification';
  }
};

const getRarityColor = (rarity) => {
  switch(rarity) {
    case 'common': return 'from-gray-300 to-gray-400';
    case 'uncommon': return 'from-green-300 to-green-500';
    case 'rare': return 'from-blue-300 to-blue-500';
    case 'epic': return 'from-purple-300 to-purple-500';
    case 'legendary': return 'from-yellow-300 to-orange-500';
    default: return 'from-gray-300 to-gray-400';
  }
};

  // Daily challenges
  const dailyChallenges = [
    { 
      id: 1, 
      title: 'Recycling Champion', 
      description: 'Log 3 recycling items', 
      progress: 2, 
      target: 3, 
      reward: 75,
      icon: '♻️',
      timeLeft: '8h 32m'
    },
    
    { 
      id: 3, 
      title: 'Learning Enthusiast', 
      description: 'Complete 1 education module', 
      progress: 0, 
      target: 1, 
      reward: 100,
      icon: '📚',
      timeLeft: '8h 32m'
    }
  ];

  return (
    <div className="p-4 space-y-6 relative">
      {/* Level Up Animation */}
      {showLevelUp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 text-center shadow-2xl animate-bounce">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-yellow-600 mb-2">LEVEL UP!</h2>
            <p className="text-xl mb-4">You reached Level {currentLevel + 1}!</p>
            <div className="bg-yellow-100 rounded-lg p-4">
              <p className="text-yellow-800">Bonus: +{levelProgress.nextLevelReward} points!</p>
            </div>
          </div>
        </div>
      )}

      {/* Badge Unlock Animation */}
      {showBadgeUnlock && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 text-center shadow-2xl animate-pulse">
            <div className="text-6xl mb-4">⚡</div>
            <h2 className="text-2xl font-bold text-purple-600 mb-2">NEW BADGE UNLOCKED!</h2>
            <p className="text-lg mb-4">Speed Logger</p>
            <div className="bg-purple-100 rounded-lg p-4">
              <p className="text-purple-800">+150 bonus points earned!</p>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Impact Dashboard */}
      <div className="bg-gradient-to-br from-green-500 via-blue-500 to-purple-500 rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="absolute top-2 right-2">
          {isOnFire && (
            <div className="flex items-center space-x-1 bg-orange-500 rounded-full px-2 py-1">
              <span className="text-xs">🔥</span>
              <span className="text-xs font-bold">ON FIRE!</span>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold mb-1">Your Impact This Month</h2>
            <div className="flex items-center space-x-2">
              <Crown className="w-5 h-5 text-yellow-300" />
              <span className="text-sm">Level {currentLevel} Eco Warrior</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">{streakCount}</div>
            <div className="text-xs">day streak</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-2xl font-bold">12.5kg</div>
            <div className="text-green-100">Waste Diverted</div>
          </div>
          <div>
            <div className="text-2xl font-bold">85%</div>
            <div className="text-green-100">Recycling Rate</div>
          </div>
        </div>

        {/* Level Progress Bar */}
        <div className="bg-white bg-opacity-20 rounded-lg p-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Level {currentLevel} Progress</span>
            <span className="text-sm">{levelProgress.pointsInLevel}/500 XP</span>
          </div>
          <div className="bg-white bg-opacity-30 rounded-full h-3">
            <div 
              className="bg-yellow-400 h-3 rounded-full transition-all duration-1000"
              style={{ width: `${(levelProgress.pointsInLevel / 500) * 100}%` }}
            ></div>
          </div>
          <div className="text-xs mt-1 text-center">
            {levelProgress.pointsToNext} XP to Level {currentLevel + 1} (+{levelProgress.nextLevelReward} bonus!)
          </div>
        </div>
      </div>

      {/* Daily Challenges */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold flex items-center">
            <Target className="w-5 h-5 mr-2 text-orange-500" />
            Daily Challenges
          </h3>
          <div className="text-sm text-gray-500">Resets in 8h 32m</div>
        </div>
        
        <div className="space-y-3">
          {dailyChallenges.map((challenge) => (
            <div key={challenge.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{challenge.icon}</div>
                  <div>
                    <h4 className="font-medium">{challenge.title}</h4>
                    <p className="text-sm text-gray-600">{challenge.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">+{challenge.reward}</div>
                  <div className="text-xs text-gray-500">points</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex-1 mr-4">
                  <div className="bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(challenge.progress / challenge.target) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-sm font-medium">
                  {challenge.progress}/{challenge.target}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Badge System */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-semibold mb-4 flex items-center">
          <Award className="w-5 h-5 mr-2 text-yellow-500" />
          Achievement Collection ({badgeSystem.unlocked.length}/12)
        </h3>
        
        {/* Unlocked Badges */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-3">🏆 Unlocked Badges</h4>
          <div className="grid grid-cols-3 gap-3">
            {badgeSystem.unlocked.map((badge) => (
              <div key={badge.id} className="text-center p-3 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border border-yellow-200 relative">
                <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full bg-gradient-to-r ${getRarityColor(badge.rarity)}`}></div>
                <div className="text-3xl mb-2">{badge.emoji}</div>
                <div className="text-xs font-medium text-gray-700">{badge.name}</div>
                <div className="text-xs text-gray-500">{badge.unlockedDate}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Badges to Unlock */}
        <div className="border-t pt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-3">🎯 Next Badges to Unlock</h4>
          <div className="space-y-3">
            {badgeSystem.nextToUnlock.map((badge) => (
              <div key={badge.id} className="bg-gray-50 rounded-lg p-4 border-2 border-dashed border-gray-300">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl opacity-50">{badge.emoji}</div>
                    <div>
                      <div className="font-medium text-gray-800">{badge.name}</div>
                      <div className="text-sm text-gray-600">{badge.description}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-purple-600">+{badge.reward}</div>
                    <div className="text-xs text-gray-500">reward</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex-1 mr-4">
                    <div className="bg-gray-300 rounded-full h-2">
                      <div 
                        className="bg-purple-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${calculateBadgeProgress(badge)}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-sm font-medium">
                    {['top3', 'risingstar', 'leader'].includes(badge.id) 
  ? `Rank ${badge.progress}` 
  : `${badge.progress}/${badge.target}`
}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Demo Buttons for Presentation */}
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
        <h3 className="font-semibold mb-4 text-blue-800">🎮 Demo Gamification Features</h3>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={triggerLevelUp}
            className="bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all transform hover:scale-105"
          >
            🎉 Trigger Level Up
          </button>
          <button
            onClick={triggerBadgeUnlock}
            className="bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-all transform hover:scale-105"
          >
            ⚡ Unlock Badge
          </button>
        </div>
        <p className="text-xs text-blue-600 mt-3 text-center">
          Use these buttons during your demo to showcase animations!
        </p>
      </div>

{/* Verification System Demo */}
<div className="bg-white rounded-xl p-6 shadow-sm">
  <h3 className="font-semibold mb-4 flex items-center">
    🔒 Verification System Demo
  </h3>
  
  <VerificationSteps activeStep={verificationStep} />
  
  <div className="bg-blue-50 rounded-lg p-4 mb-4">
    <h4 className="font-medium text-blue-800 mb-2">Current Step: {getVerificationStepText()}</h4>
    <p className="text-sm text-blue-700">
      {getVerificationDescription()}
    </p>
  </div>
  
  <div className="grid grid-cols-2 gap-3">
    <button
      onClick={nextVerificationStep}
      className="bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all transform hover:scale-105"
    >
      {verificationStep < 2 ? 'Next Step' : 'Complete Verification'}
    </button>
    <button
      onClick={resetVerification}
      className="bg-gray-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all transform hover:scale-105"
    >
      Reset Demo
    </button>
  </div>
</div>



      {/* Research Impact with Gamification Metrics */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
        <h3 className="font-semibold mb-4 text-gray-800">📊 Gamification Research Impact</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">+34%</div>
            <div className="text-xs text-gray-600">Engagement increase</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">89%</div>
            <div className="text-xs text-gray-600">Daily challenge completion</div>
          </div>
        </div>
        <div className="space-y-2 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Badge collection rate:</span>
            <span className="font-bold text-purple-600">76% avg per user</span>
          </div>
          <div className="flex justify-between">
            <span>Level progression impact:</span>
            <span className="font-bold text-orange-600">+28% retention</span>
          </div>
          <div className="flex justify-between">
            <span>Demo Presentation:</span>
            <span className="font-bold text-blue-600">For University Of Greenwich ✨</span>
          </div>
        </div>
      </div>
    </div>
  );
};



const WasteLogger = ({ user }) => {
  const [selectedType, setSelectedType] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  const wasteTypes = [
    { id: 'recycling', name: 'Recycling', emoji: '♻️', points: 10, color: 'bg-blue-50' },
    { id: 'compost', name: 'Compost', emoji: '🥬', points: 15, color: 'bg-green-50' },
    { id: 'general', name: 'General', emoji: '🗑️', points: 5, color: 'bg-gray-50' },
    { id: 'electronics', name: 'E-Waste', emoji: '📱', points: 25, color: 'bg-purple-50' },
    { id: 'textiles', name: 'Textiles', emoji: '👕', points: 20, color: 'bg-pink-50' },
    { id: 'batteries', name: 'Batteries', emoji: '🔋', points: 30, color: 'bg-yellow-50' },
  ];

  const handleSubmit = () => {
    if (selectedType) {
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setSelectedType('');
        setQuantity(1);
      }, 2500);
    }
  };

  if (showSuccess) {
    const selectedWaste = wasteTypes.find(type => type.id === selectedType);
    const pointsEarned = selectedWaste ? selectedWaste.points * quantity : 0;
    
    return (
      <div className="p-4">
        <div className="bg-white rounded-xl p-8 text-center shadow-lg">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Excellent Work!</h2>
          <p className="text-gray-600 mb-4">
            You earned <span className="font-bold text-primary text-xl">{pointsEarned} points</span>!
          </p>
          <div className="text-5xl mb-4">{selectedWaste?.emoji}</div>
          <div className="bg-green-50 rounded-lg p-4 mb-4">
            <p className="text-sm text-green-800">
              <strong>Impact:</strong> You're helping achieve our 20% campus improvement goal!
            </p>
          </div>
          <p className="text-sm text-gray-500">
            Every action counts toward sustainable campus living! 🌍
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-bold mb-6">Log Your Waste</h2>
        
        <div className="mb-6">
          <label className="block font-medium mb-3">What type of waste?</label>
          <div className="grid grid-cols-2 gap-3">
            {wasteTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={selectedType === type.id 
                  ? 'p-4 rounded-lg border-2 border-primary bg-green-50 text-center transition-all transform hover:scale-105 shadow-md'
                  : `p-4 rounded-lg border-2 border-gray-200 ${type.color} text-center transition-all transform hover:scale-105`
                }
              >
                <div className="text-3xl mb-2">{type.emoji}</div>
                <div className="font-medium text-sm">{type.name}</div>
                <div className="text-xs text-gray-500">{type.points} pts</div>
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block font-medium mb-3">Quantity</label>
          <div className="flex items-center justify-center space-x-6">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xl font-bold hover:bg-gray-300 transition-colors"
            >
              -
            </button>
            <span className="text-3xl font-bold w-16 text-center text-primary">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold hover:bg-green-600 transition-colors"
            >
              +
            </button>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!selectedType}
          className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-green-600 disabled:bg-gray-300 transition-all transform hover:scale-105 disabled:hover:scale-100"
        >
          Log Waste & Earn Points
        </button>
      </div>
    </div>
  );
};

const Analytics = ({ user }) => {
  return (
    <div className="p-4 space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <TrendingUp className="w-6 h-6 text-primary mx-auto mb-2" />
          <div className="text-2xl font-bold text-primary">85%</div>
          <div className="text-xs text-gray-600">Recycling Rate</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <Award className="w-6 h-6 text-accent mx-auto mb-2" />
          <div className="text-2xl font-bold text-accent">{user.points}</div>
          <div className="text-xs text-gray-600">Points</div>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm text-center">
          <Target className="w-6 h-6 text-secondary mx-auto mb-2" />
          <div className="text-2xl font-bold text-secondary">12.5kg</div>
          <div className="text-xs text-gray-600">Diverted</div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-semibold mb-4">Monthly Progress Toward 20% Goal</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">January</span>
            <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
              <div className="bg-primary h-4 rounded-full transition-all duration-1000" style={{ width: '65%' }}></div>
            </div>
            <span className="text-sm font-bold text-primary">65%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">February</span>
            <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
              <div className="bg-primary h-4 rounded-full transition-all duration-1000" style={{ width: '72%' }}></div>
            </div>
            <span className="text-sm font-bold text-primary">72%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium">March</span>
            <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
              <div className="bg-primary h-4 rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
            </div>
            <span className="text-sm font-bold text-primary">85%</span>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
        <h3 className="font-semibold mb-4 text-gray-800">📊 Research Findings</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span>Improvement vs baseline:</span>
            <span className="font-bold text-green-600">+22%</span>
          </div>
          <div className="flex justify-between">
            <span>Campus target achieved:</span>
            <span className="font-bold text-green-600">20% ✓</span>
          </div>
          <div className="flex justify-between">
            <span>Student engagement:</span>
            <span className="font-bold text-green-600">34%</span>
          </div>
          <div className="flex justify-between">
            <span>WastLess App Demo presentation:</span>
            <span className="font-bold text-blue-600">For Greenwich University</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Leaderboard = ({ user }) => {
  // Sample leaderboard data for international students
  const leaderboardData = [
    {
  id: 1, 
  name: "Karen Davis", 
  country: "Italy", 
  points: 1250, 
  badges: 3, 
  avatar: "🇮🇹", // Changed to Italy flag
  wasteLogged: "12.5kg",
  recyclingRate: "85%"
},
{ 
  id: 2, 
  name: "Peace Joy", 
  country: "Turkey", 
  points: 1180, 
  badges: 3, 
  avatar: "🇹🇷", // Changed to Turkey flag
  wasteLogged: "11.2kg",
  recyclingRate: "82%"
},
{ 
  id: 3, 
  name: "Oasis Central", 
  country: "UK", // Changed to UK instead of London
  points: 1150, 
  badges: 2, 
  avatar: "🇬🇧", // Changed to UK flag
  wasteLogged: "10.8kg",
  recyclingRate: "78%"
},
    { 
      id: 4, 
      name: "Raj Patel", 
      country: "India", 
      points: 1095, 
      badges: 2, 
      avatar: "🇮🇳",
      wasteLogged: "9.5kg",
      recyclingRate: "76%"
    },
    { 
      id: 5, 
      name: "Sophie Martin", 
      country: "France", 
      points: 1020, 
      badges: 2, 
      avatar: "🇫🇷",
      wasteLogged: "8.9kg",
      recyclingRate: "74%"
    },
    { 
      id: 6, 
      name: "Kenji Tanaka", 
      country: "Japan", 
      points: 980, 
      badges: 2, 
      avatar: "🇯🇵",
      wasteLogged: "8.1kg",
      recyclingRate: "71%"
    },
    { 
      id: 7, 
      name: "Lisa Johnson", 
      country: "USA", 
      points: 945, 
      badges: 1, 
      avatar: "🇺🇸",
      wasteLogged: "7.8kg",
      recyclingRate: "69%"
    },
    { 
      id: 8, 
      name: "Carlos Mendez", 
      country: "Mexico", 
      points: 890, 
      badges: 1, 
      avatar: "🇲🇽",
      wasteLogged: "7.2kg",
      recyclingRate: "65%"
    }
  ];

  const getRankIcon = (rank) => {
    switch(rank) {
      case 1: return "🥇";
      case 2: return "🥈";
      case 3: return "🥉";
      default: return `#${rank}`;
    }
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white shadow-lg">
        <h2 className="text-2xl font-bold mb-2 flex items-center">
          🏆 International Student Leaderboard
        </h2>
        <p className="text-green-100">Compete with fellow international students across campus!</p>
      </div>

      {/* Stats Overview */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h3 className="font-semibold mb-3 flex items-center">
          📈 Community Impact
        </h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-lg font-bold text-green-600">8 Students</div>
            <div className="text-xs text-gray-600">Active This Week</div>
          </div>
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-lg font-bold text-blue-600">68.1kg</div>
            <div className="text-xs text-gray-600">Total Diverted</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="text-lg font-bold text-purple-600">75%</div>
            <div className="text-xs text-gray-600">Avg Recycling</div>
          </div>
        </div>
      </div>

      {/* Top 3 Podium */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-semibold mb-4 text-center">🏆 Top Performers</h3>
        <div className="flex justify-center items-end space-x-4 mb-6">
          {/* 2nd Place */}
          <div className="text-center">
            <div className="w-16 h-20 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg flex items-center justify-center mb-2">
              <span className="text-2xl">{leaderboardData[1].avatar}</span>
            </div>
            <div className="text-sm font-bold">{leaderboardData[1].name.split(' ')[0]}</div>
            <div className="text-xs text-gray-600">{leaderboardData[1].points} pts</div>
            <div className="text-lg">🥈</div>
          </div>

          {/* 1st Place */}
          <div className="text-center">
            <div className="w-20 h-24 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-lg flex items-center justify-center mb-2 shadow-lg">
              <span className="text-3xl">{leaderboardData[0].avatar}</span>
            </div>
            <div className="text-sm font-bold">{leaderboardData[0].name.split(' ')[0]}</div>
            <div className="text-xs text-gray-600">{leaderboardData[0].points} pts</div>
            <div className="text-xl">🥇</div>
          </div>

          {/* 3rd Place */}
          <div className="text-center">
            <div className="w-16 h-20 bg-gradient-to-br from-orange-300 to-orange-400 rounded-lg flex items-center justify-center mb-2">
              <span className="text-2xl">{leaderboardData[2].avatar}</span>
            </div>
            <div className="text-sm font-bold">{leaderboardData[2].name.split(' ')[0]}</div>
            <div className="text-xs text-gray-600">{leaderboardData[2].points} pts</div>
            <div className="text-lg">🥉</div>
          </div>
        </div>
      </div>

      {/* Full Leaderboard */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 bg-gray-50 border-b">
          <h3 className="font-semibold flex items-center">
            👥 Full Rankings - International Students
          </h3>
        </div>
        
        <div className="divide-y divide-gray-100">
          {leaderboardData.map((student, index) => {
            const rank = index + 1;
            const isCurrentUser = user && student.name === user.name;
            
            return (
              <div 
                key={student.id} 
                className={`p-4 flex items-center space-x-4 hover:bg-gray-50 transition-colors ${
                  isCurrentUser ? 'bg-green-50 border-l-4 border-green-500' : ''
                }`}
              >
                {/* Rank */}
                <div className="flex-shrink-0 w-12 text-center">
                  <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold ${
                    rank <= 3 ? 'text-lg' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {getRankIcon(rank)}
                  </div>
                </div>

                {/* Avatar & Info */}
                <div className="flex items-center space-x-3 flex-1">
                  <div className="text-2xl">{student.avatar}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-gray-900">{student.name}</span>
                      {isCurrentUser && (
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                          You
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-600">{student.country}</div>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center space-x-6 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-green-600">{student.points}</div>
                    <div className="text-xs text-gray-500">points</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-blue-600">{student.wasteLogged}</div>
                    <div className="text-xs text-gray-500">diverted</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-purple-600">{student.recyclingRate}</div>
                    <div className="text-xs text-gray-500">recycling</div>
                  </div>
                </div>

                {/* Badges */}
                <div className="flex items-center space-x-1">
                  {Array.from({ length: student.badges }, (_, i) => (
                    <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Team Challenges */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-semibold mb-4 flex items-center">
          👥 International Student Challenges
        </h3>
        
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200">
            <div className="flex justify-between items-center mb-2">
              <div className="font-medium text-blue-800">🏠 International Dormitory Challenge</div>
              <div className="text-sm text-blue-600">3 days left</div>
            </div>
            <div className="text-sm text-blue-700 mb-3">
              International students vs. local students - Most recycling logged wins!
            </div>
            <div className="flex justify-between text-sm">
              <span>Progress: 2nd place</span>
              <span className="font-bold text-blue-600">+100 pts reward</span>
            </div>
            <div className="mt-2 bg-blue-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '68%' }}></div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg p-4 border border-orange-200">
            <div className="flex justify-between items-center mb-2">
              <div className="font-medium text-orange-800">🌍 Cultural Exchange Challenge</div>
              <div className="text-sm text-orange-600">2 days left</div>
            </div>
            <div className="text-sm text-orange-700 mb-3">
              Share waste management practices from your home country
            </div>
            <div className="flex justify-between text-sm">
              <span>Progress: 3/5 countries shared</span>
              <span className="font-bold text-orange-600">+75 pts reward</span>
            </div>
            <div className="mt-2 bg-orange-200 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Research Impact Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
        <h3 className="font-semibold mb-4 text-gray-800">📊 Research Impact</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">68.1kg</div>
            <div className="text-xs text-gray-600">Total waste diverted by international students</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">75%</div>
            <div className="text-xs text-gray-600">Average recycling rate improvement</div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <div className="text-sm text-gray-700">
            <strong>Research Goal:</strong> 20% improvement among international students ✅ 
            <span className="text-green-600 font-bold"> ACHIEVED!</span>
          </div>
          <div className="text-xs text-blue-600 mt-2">
            Based on 23 international student interviews at University of Greenwich
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200 text-center">
        <h3 className="font-semibold mb-2 text-gray-800">🎯 Climb the International Rankings!</h3>
        <p className="text-sm text-gray-700 mb-3">
          Log more waste disposal activities to earn points and represent your country!
        </p>
        <div className="text-xs text-gray-600">
          <strong>Pro tip:</strong> Consistent daily logging gives bonus points! 🌟
        </div>
      </div>
    </div>
  );
};

const Profile = ({ user, onLogout }) => {
  return (
    <div className="p-4 space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="text-center mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <User className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.university}</p>
          <p className="text-sm text-gray-500">International Student from {user.country}</p>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{user.points}</div>
            <div className="text-xs text-gray-600">Total Points</div>
          </div>
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{user.badges.length}</div>
            <div className="text-xs text-gray-600">Badges</div>
          </div>
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">15</div>
            <div className="text-xs text-gray-600">Day Streak</div>
          </div>
        </div>

        <button
          onClick={onLogout}
          className="w-full bg-gray-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
        >
          Logout
        </button>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="font-semibold mb-4 flex items-center">
          <Award className="w-5 h-5 mr-2 text-yellow-500" />
          Badge Collection ({user.badges.length}/12)
        </h3>
        
        <div className="grid grid-cols-4 gap-3 mb-4">
          {user.badges.map((badge, index) => (
            <div key={index} className="text-center p-2 bg-yellow-100 rounded-lg border border-yellow-300">
              <div className="text-2xl mb-1">{badge}</div>
              <div className="text-xs font-medium">Level {index + 1}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-orange-800">🎯 Next Badge: Speed Logger</span>
            <span className="text-sm text-orange-600">⚡</span>
          </div>
          <div className="text-xs text-orange-700 mb-2">Log waste 5 times in one day</div>
          <div className="bg-orange-200 rounded-full h-2 mb-1">
            <div className="bg-orange-500 h-2 rounded-full transition-all duration-500" style={{ width: '60%' }}></div>
          </div>
          <div className="text-xs text-orange-600">3/5 completed today</div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-xl p-6">
        <h3 className="font-semibold mb-2 text-blue-800">About WasteLess App</h3>
        <p className="text-sm text-blue-700 mb-3">
          Helping international students navigate UK waste disposal systems through gamification and education.
        </p>
        <div className="text-xs text-blue-600">
          Based on research with 23 international students at University of Greenwich
        </div>
      </div>
    </div>
  );
};

// Add this Educational component to your App.js file

const Education = ({ user, onUpdatePoints }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [gameMode, setGameMode] = useState(false);
  const [currentGame, setCurrentGame] = useState(null);
  const [gameScore, setGameScore] = useState(0);
  const [gameLevel, setGameLevel] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [completedModules, setCompletedModules] = useState(new Set());

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📚' },
    { id: 'recycling', label: 'Recycling', icon: '♻️' },
    { id: 'interactive', label: 'Interactive', icon: '🎮' },
    { id: 'cultural', label: 'Cultural', icon: '🌍' },
    { id: 'quiz', label: 'Quiz', icon: '🧩' }
  ];

  // Drag and Drop Game Component
  const WasteSortingGame = ({ category, onComplete }) => {
    const [draggedItem, setDraggedItem] = useState(null);
    const [droppedItems, setDroppedItems] = useState({
      recycling: [],
      compost: [],
      general: [],
      ewaste: []
    });
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState('');

    const wasteItems = [
      { id: 1, name: 'Plastic Bottle', correct: 'recycling', icon: '🥤', points: 10 },
      { id: 2, name: 'Apple Core', correct: 'compost', icon: '🍎', points: 10 },
      { id: 3, name: 'Old Phone', correct: 'ewaste', icon: '📱', points: 15 },
      { id: 4, name: 'Pizza Box', correct: 'general', icon: '📦', points: 5 },
      { id: 5, name: 'Banana Peel', correct: 'compost', icon: '🍌', points: 10 },
      { id: 6, name: 'Aluminum Can', correct: 'recycling', icon: '🥫', points: 10 },
      { id: 7, name: 'Broken Glass', correct: 'general', icon: '🔴', points: 5 },
      { id: 8, name: 'Coffee Grounds', correct: 'compost', icon: '☕', points: 10 }
    ];

    const bins = [
      { id: 'recycling', name: 'Recycling', icon: '♻️', color: 'bg-blue-100 border-blue-300' },
      { id: 'compost', name: 'Compost', icon: '🥬', color: 'bg-green-100 border-green-300' },
      { id: 'general', name: 'General', icon: '🗑️', color: 'bg-gray-100 border-gray-300' },
      { id: 'ewaste', name: 'E-Waste', icon: '📱', color: 'bg-purple-100 border-purple-300' }
    ];

    const handleDragStart = (e, item) => {
      setDraggedItem(item);
      e.dataTransfer.effectAllowed = 'move';
    };

    const handleDragOver = (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
    };

    const handleDrop = (e, binId) => {
      e.preventDefault();
      if (!draggedItem) return;

      const isCorrect = draggedItem.correct === binId;
      const newScore = isCorrect ? score + draggedItem.points : Math.max(0, score - 5);
      
      setScore(newScore);
      setDroppedItems(prev => ({
        ...prev,
        [binId]: [...prev[binId], { ...draggedItem, isCorrect }]
      }));

      if (isCorrect) {
        setFeedback(`✅ Correct! +${draggedItem.points} points`);
      } else {
        setFeedback(`❌ Incorrect. ${draggedItem.name} belongs in ${bins.find(b => b.id === draggedItem.correct)?.name}`);
      }

      setTimeout(() => setFeedback(''), 2000);
      setDraggedItem(null);

      // Check if game is complete
      const totalDropped = Object.values(droppedItems).flat().length + 1;
      if (totalDropped >= wasteItems.length) {
        setTimeout(() => onComplete(newScore), 1000);
      }
    };

    const availableItems = wasteItems.filter(item => 
      !Object.values(droppedItems).flat().some(dropped => dropped.id === item.id)
    );

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-4 text-white">
          <h3 className="text-xl font-bold mb-2">🎮 Waste Sorting Challenge</h3>
          <div className="flex justify-between items-center">
            <p className="text-green-100">Drag items to the correct bins!</p>
            <div className="bg-white bg-opacity-20 rounded-lg px-3 py-1">
              <span className="font-bold">Score: {score}</span>
            </div>
          </div>
        </div>

        {feedback && (
          <div className={`p-3 rounded-lg text-center font-medium ${
            feedback.includes('✅') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {feedback}
          </div>
        )}

        {/* Draggable Items */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h4 className="font-semibold mb-3 flex items-center">
            <Target className="w-4 h-4 mr-2" />
            Items to Sort
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {availableItems.map(item => (
              <div
                key={item.id}
                draggable
                onDragStart={(e) => handleDragStart(e, item)}
                className="bg-gray-50 p-3 rounded-lg border-2 border-dashed border-gray-300 cursor-grab active:cursor-grabbing hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">{item.icon}</div>
                  <div className="text-sm font-medium">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.points} pts</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Drop Bins */}
        <div className="grid grid-cols-2 gap-4">
          {bins.map(bin => (
            <div
              key={bin.id}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, bin.id)}
              className={`${bin.color} p-4 rounded-xl border-2 border-dashed min-h-32 transition-all hover:scale-105`}
            >
              <div className="text-center mb-3">
                <div className="text-3xl mb-1">{bin.icon}</div>
                <div className="font-semibold text-sm">{bin.name}</div>
              </div>
              
              <div className="space-y-2">
                {droppedItems[bin.id].map((item, index) => (
                  <div 
                    key={index} 
                    className={`p-2 rounded-lg text-xs text-center ${
                      item.isCorrect ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                    }`}
                  >
                    {item.icon} {item.name} {item.isCorrect ? '✅' : '❌'}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Cultural Comparison Game
  const CulturalComparisonGame = ({ onComplete }) => {
    const [selectedCountry, setSelectedCountry] = useState('');
    const [showComparison, setShowComparison] = useState(false);

const countries = [
   { id: 'ireland', name: 'Ireland', flag: '🇮🇪' },
  { id: 'india', name: 'India', flag: '🇮🇳' },
  { id: 'nigeria', name: 'Nigeria', flag: '🇳🇬' },
  { id: 'ghana', name: 'Ghana', flag: '🇬🇭' },
  { id: 'italy', name: 'Italy', flag: '🇮🇹' },
  { id: 'congo', name: 'Congo', flag: '🇨🇩' },
  { id: 'spain', name: 'Spain', flag: '🇪🇸' },
  { id: 'uk', name: 'United Kingdom', flag: '🇬🇧' },
  { id: 'usa', name: 'United States', flag: '🇺🇸' },
  { id: 'other', name: 'Other Country', flag: '🌍' }
];

    const comparisons = {
    china: {
    practice: 'Mandatory waste sorting in major cities',
    difference: 'UK has voluntary sorting with strong social pressure',
    tip: 'UK recycling is less strict but equally important'
  },
  ireland: {
    practice: 'Three-bin system with strict recycling rules',
    difference: 'UK has similar systems but with more local variation',
    tip: 'UK recycling practices are very similar to Ireland'
  },
  india: {
    practice: 'Informal recycling sector with door-to-door collection',
    difference: 'UK has formal council collection systems',
    tip: 'Follow council schedules rather than informal collectors'
  },
  nigeria: {
    practice: 'Informal waste collection with limited recycling infrastructure',
    difference: 'UK has formal council collection with comprehensive recycling',
    tip: 'Use council-provided bins and follow collection schedules'
  },
  ghana: {
  practice: 'Community-based waste collection with strong recycling culture',
  difference: 'UK has individual household collection with scheduled pickup',
  tip: 'UK recycling is less community-focused but equally important'
  }, 
italy: {
  practice: 'Strict waste separation with different colored bins',
  difference: 'UK has similar system but less rigid enforcement',
  tip: 'UK recycling follows similar principles but with more flexibility'
  },
  congo: {
    practice: 'Limited formal waste management, mostly informal collectors',
    difference: 'UK has structured waste management with regular collection',
    tip: 'Follow UK council guidelines for proper waste disposal'
  },
  spain: {
    practice: 'Container-based system with separate bins for different materials',
    difference: 'UK uses household bins while Spain uses community containers',
    tip: 'UK system is more convenient with doorstep collection'
  },
  uk: {
  practice: 'Well-established council collection with comprehensive recycling systems',
  difference: 'This is your current system - UK practices are the baseline',
  tip: 'You\'re already familiar with UK recycling - help teach others!'
},
usa: {
  practice: 'Varies by state/city with different recycling requirements',
  difference: 'UK has more standardized national recycling guidelines',
  tip: 'UK recycling is more consistent across different areas'
},
other: {
  practice: 'Every country has unique waste management approaches',
  difference: 'UK emphasizes household separation and council collection',
  tip: 'Observe local UK practices and follow council guidelines'
}
};

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-4 text-white">
          <h3 className="text-xl font-bold mb-2">🌍 Cultural Waste Practices</h3>
          <p className="text-purple-100">Compare UK practices with your home country!</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h4 className="font-semibold mb-4">Select Your Home Country:</h4>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {countries.map(country => (
              <button
                key={country.id}
                onClick={() => {
                  setSelectedCountry(country.id);
                  setShowComparison(true);
                }}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedCountry === country.id
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200 bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="text-2xl mb-2">{country.flag}</div>
                <div className="font-medium">{country.name}</div>
              </button>
            ))}
          </div>

          {showComparison && comparisons[selectedCountry] && (
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h5 className="font-semibold text-blue-800 mb-2">Your Country's Practice:</h5>
                <p className="text-blue-700 text-sm">{comparisons[selectedCountry].practice}</p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h5 className="font-semibold text-green-800 mb-2">UK Difference:</h5>
                <p className="text-green-700 text-sm">{comparisons[selectedCountry].difference}</p>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                <h5 className="font-semibold text-yellow-800 mb-2">💡 Adaptation Tip:</h5>
                <p className="text-yellow-700 text-sm">{comparisons[selectedCountry].tip}</p>
              </div>

              <button
                onClick={() => onComplete(50)}
                className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-all"
              >
                Complete Cultural Learning (+50 points)
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };


  // Story-based Learning Module
  const StoryLearningModule = ({ onComplete }) => {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-4 text-white">
          <h3 className="text-xl font-bold mb-2">📖 Interactive Story</h3>
          <p className="text-indigo-100">Make choices that shape your sustainability journey!</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">🏛️</div>
            <h4 className="text-lg font-semibold">The Greenwich Guardian</h4>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <p className="text-gray-700 leading-relaxed">
              You're walking across Greenwich's UNESCO World Heritage campus when you notice a fellow international student struggling with waste bins. They look confused and are holding a mixed bag of recyclables and general waste.
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => onComplete(25)}
              className="w-full bg-indigo-500 text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-all text-left px-4"
            >
              💡 "Hi! I use the WasteLess app - it helped me learn UK recycling. Want me to show you?"
            </button>
            <button
              onClick={() => onComplete(15)}
              className="w-full bg-gray-500 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all text-left px-4"
            >
              🚶 "Sorry, I'm in a hurry" (Walk past)
            </button>
          </div>
        </div>
      </div>
    );
  };

 const handleGameComplete = (points) => {
  console.log('Game completed with points:', points);
  console.log('onUpdatePoints function available:', !!onUpdatePoints);
  
  setGameScore(points);
  setShowSuccess(true);
  setGameMode(false);
  
  if (onUpdatePoints) {
    console.log('Calling onUpdatePoints with:', points);
    onUpdatePoints(points);
  } else {
    console.log('ERROR: onUpdatePoints function not available');
  }
  
  setTimeout(() => setShowSuccess(false), 3000);
};

  const renderContent = () => {
    if (gameMode && currentGame) {
      switch (currentGame) {
        case 'sorting':
          return <WasteSortingGame onComplete={handleGameComplete} />;
        case 'cultural':
          return <CulturalComparisonGame onComplete={handleGameComplete} />;
        case 'story':
          return <StoryLearningModule onComplete={handleGameComplete} />;
        default:
          return null;
      }
    }

    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-xl p-6 text-white shadow-lg">
              <h2 className="text-2xl font-bold mb-2">🎓 Welcome to UK Waste Learning</h2>
              <p className="text-blue-100">Interactive education designed for international students</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-green-500">
                <div className="flex items-center space-x-3 mb-3">
                  <Globe className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold">Cultural Adaptation</h3>
                </div>
                <p className="text-gray-600 text-sm">Learn how UK waste practices differ from your home country</p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-blue-500">
                <div className="flex items-center space-x-3 mb-3">
                  <BookOpen className="w-6 h-6 text-blue-500" />
                  <h3 className="font-semibold">Interactive Learning</h3>
                </div>
                <p className="text-gray-600 text-sm">Hands-on games and activities to practice waste sorting</p>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-purple-500">
                <div className="flex items-center space-x-3 mb-3">
                  <Users className="w-6 h-6 text-purple-500" />
                  <h3 className="font-semibold">Story-Based Learning</h3>
                </div>
                <p className="text-gray-600 text-sm">Real campus scenarios to build confidence</p>
              </div>
            </div>
          </div>
        );

      case 'interactive':
        return (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">🎮 Interactive Learning Games</h2>
              <p className="text-green-100">Practice waste sorting with drag-and-drop games!</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <button
                onClick={() => { setGameMode(true); setCurrentGame('sorting'); }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-left border-2 border-gray-200 hover:border-green-500"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">🎯</div>
                    <div>
                      <h3 className="font-semibold text-lg">Waste Sorting Challenge</h3>
                      <p className="text-gray-600 text-sm">Drag items to correct bins and earn points</p>
                    </div>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Play Now
                  </div>
                </div>
              </button>

              <button
                onClick={() => { setGameMode(true); setCurrentGame('cultural'); }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-left border-2 border-gray-200 hover:border-purple-500"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">🌍</div>
                    <div>
                      <h3 className="font-semibold text-lg">Cultural Comparison</h3>
                      <p className="text-gray-600 text-sm">Compare UK practices with your home country</p>
                    </div>
                  </div>
                  <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    Explore
                  </div>
                </div>
              </button>

              <button
                onClick={() => { setGameMode(true); setCurrentGame('story'); }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-left border-2 border-gray-200 hover:border-indigo-500"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">📖</div>
                    <div>
                      <h3 className="font-semibold text-lg">Greenwich Guardian Story</h3>
                      <p className="text-gray-600 text-sm">Interactive campus-based scenarios</p>
                    </div>
                  </div>
                  <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                    Start Story
                  </div>
                </div>
              </button>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🚧</div>
            <h3 className="text-lg font-semibold mb-2">More Content Coming Soon!</h3>
            <p className="text-gray-600">Additional educational modules will be available here.</p>
          </div>
        );
    }
  };

  return (
    <div className="p-4 space-y-6 relative">
      {/* Success Animation */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 text-center shadow-2xl animate-bounce">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-green-600 mb-2">Module Complete!</h2>
            <p className="text-lg mb-4">You earned {gameScore} points!</p>
            <div className="bg-green-100 rounded-lg p-4">
              <p className="text-green-800">Keep learning to become a waste disposal expert!</p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-6 text-white shadow-lg">
        <h1 className="text-2xl font-bold mb-2">📚 Learn & Play</h1>
        <p className="text-green-100">Interactive waste disposal education for international students</p>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex overflow-x-auto space-x-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setGameMode(false); }}
              className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-green-500 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {renderContent()}

      {/* Progress Tracking */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
        <h3 className="font-semibold mb-3 text-orange-800">📊 Your Learning Progress</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{completedModules.size}</div>
            <div className="text-xs text-gray-600">Modules Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{gameScore}</div>
            <div className="text-xs text-gray-600">Points This Session</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

