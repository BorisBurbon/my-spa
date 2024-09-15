import { Box, Skeleton } from '@mui/material';

const skeletonStyles = {
  m: 'auto',
  display: 'flex',
  alignItems: 'start',
  minHeight: '60vh',
  width: '100%',
  gap: 2,
  flexWrap: 'wrap',
};

export const LoadingProductSkeleton: React.FC = () => (
  <Box sx={skeletonStyles}>
    <Skeleton variant="rounded" width={300} height={300} />
    <div>
      <Skeleton variant="rectangular" width={200} height="2em" sx={{ mb: 1 }} />
      <Skeleton variant="rectangular" width={300} height="1em" sx={{ mb: 1 }} />
      <Skeleton variant="rectangular" width={300} height="1em" sx={{ mb: 1 }} />
      <Skeleton variant="rectangular" width={120} height="1em" sx={{ mb: 1 }} />
      <Skeleton variant="rectangular" width={100} height="1em" sx={{ mb: 1 }} />
    </div>
  </Box>
);
