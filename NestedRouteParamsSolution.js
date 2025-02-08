// Solution: Accessing parameters using useLocation hook
import { useLocation } from 'react-router-dom';

function MyComponent() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const myParam = queryParams.get('myParam');

  return (
    <div>
      {/* Access the param here */}
      <p>My Param: {myParam}</p>
    </div>
  );
}

export default MyComponent; 