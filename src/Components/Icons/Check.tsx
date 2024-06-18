import {Box} from '@chakra-ui/react'

const Check = () => {
  return (
    <Box pt={1} pl={1}>
      <svg
        className="feather feather-check-circle"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01 9 11.01" />
      </svg>
    </Box>

  );
};

export default Check;


