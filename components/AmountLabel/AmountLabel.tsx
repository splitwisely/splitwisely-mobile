import { Box, Text } from 'native-base';

export interface AmountLabelProps {
  amount: number | string;
  concurrency: string;
}

export default function AmountLabel({ amount, concurrency }: AmountLabelProps) {
  return (
    <Box flexDirection='row' alignItems='center'>
      <Text fontSize='xs' fontWeight='thin' mr='1'>
        {concurrency}
      </Text>
      <Text fontSize='2xl' fontWeight='medium'>
        {amount}
      </Text>
    </Box>
  );
}
