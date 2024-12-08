
import Header from '../components/Header';  
import { Box, Text, Button } from '@chakra-ui/react'; // Chakra UI components
import { Link } from 'react-router-dom'; // For routing to other pages
import heroImage from '../assets/hero-image.jpg'; // correcting the path
import { useOutletContext } from 'react-router-dom';

//This is Miriam's code. Due to merge conflicts, it was easier to create a copy and import it into the prototype branch

function HomePage() {
  const theme = useOutletContext();
  return (
    <>
      {/* Header with dynamic text */}
      <Header size="6xl" bg={theme.sideBarBg} color="gray.900" text="Welcome to ChakraX" />

      {/* Welcome Text */}
      <Box textAlign="center" mt={5}>
        <Text fontSize="lg" color="gray.300">
        Unleash your full potential with our all-in-one web app designed to help you live your best life. Seamlessly integrate good habits with our Habit Tracker, optimise your energy levels using the Energy Tracker, stay organised with our intuitive To-Do List, and reflect on your journey in our insightful Journal.
Whether you're aiming to boost productivity, enhance well-being, or simply keep your daily tasks on track, we've got you covered. Join ChakraX today and transform your planning skill, take action, and reflect on your journey!
        </Text>
      </Box> 

      {/* Buttons for navigation */}
      <Box textAlign="center" mt={6}>
        <Link to="/habit-tracker">
          <Button size="lg" colorScheme="teal" m={3}>
            Go to Habit Tracker
          </Button>
        </Link>
        <Link to="/todo-list">
          <Button size="lg" colorScheme="cyan" m={3}>
            Go to To-Do List
          </Button>
        </Link>
        <Link to="/journal">
          <Button size="lg" colorScheme="blue" m={3}>
            Start Journaling
          </Button>
        </Link>
        <Link to="/energy-tracker">
          <Button size="lg" colorScheme="teal" m={3}>
            Go to Energy Tracker
          </Button>
        </Link>
      </Box> 

 {/* Hero Image */} 
  <Box textAlign="center" mt={6}> <img src={heroImage} alt="Hero" style={{ width: '100%', borderRadius: '10px',  height: "300px"}} /> </Box>

    </>
  );
}

export default HomePage;
