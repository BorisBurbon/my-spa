import { Box, Skeleton } from '@mui/material';

export const LoadingTableSkeleton: React.FC = () => (
	<Box>
      {[...Array(9)].map((_, index) => (
        <Skeleton key={index} variant="rectangular" width="100%" height={59} style={{ marginBottom: 8 }} />
      ))}
	</Box>
  );
