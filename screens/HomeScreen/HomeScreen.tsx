import { Box, Button, Center, Divider, Text } from 'native-base';
import AmountLabel from '../../components/AmountLabel/AmountLabel';
import { AntDesign as Icon } from '@expo/vector-icons';

import Card from '../../components/Card/Card';
import Segment from './components/Segment/Segment';

export default function HomeScreen() {
  return (
    <Box mx="4" mb="8" flex={1}>
      <Box safeArea w='100%'>
        <Text fontSize='sm' mb='3' fontWeight='thin'>
          Hello Cachon
        </Text>
        <Box mb='3'>
          <Text fontSize='lg'>
            <Text fontWeight='medium'>Good Morning</Text>, Don't{'\n'}forget to
            Have
            <Text fontWeight='medium'> Breakfast!</Text>
          </Text>
        </Box>
        <Box w='100%'>
          <Card
            leftTitle='My Balance'
            rightTitle={<Icon name='ellipsis1' size={24} color='black' />}
            sectionName='Total Balance'
            sectionContent={<AmountLabel amount='40.000' concurrency='$' />}
            footer={
              <Box flexDirection='row' justifyContent='space-between'>
                <Button bg='black' borderRadius='full' w='48%'>
                  <Text color='white'>Deposit</Text>
                </Button>
                <Button bg='gray.200' borderRadius='full' w='48%'>
                  <Text>Withdraw</Text>
                </Button>
              </Box>
            }
          />
        </Box>
        <Center mt='2' mb='3'>
          <Divider borderRadius='2xl' h='1' w='2/4' bg='gray.100' />
        </Center>
        <Text fontSize='lg' fontWeight='medium' mb='3'>
          Billing
        </Text>
        <Segment></Segment>
      </Box>
      <Box w='100%' bottom={0} position='absolute'>
        <Button borderRadius='full' py='3' bg='purple.200'>
          <Text>Add Split Billing</Text>
        </Button>
      </Box>
    </Box>
  );
}
