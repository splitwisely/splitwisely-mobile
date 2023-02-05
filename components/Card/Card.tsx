import { Box, Text, Container, NativeBaseProviderProps } from 'native-base';
import { InterfaceBoxProps } from 'native-base/lib/typescript/components/primitives/Box';

export interface CardProps {
  leftTitle: string;
  rightTitle?: string | JSX.Element;
  sectionName?: string;
  sectionContent?: string | JSX.Element;
  footer?: string | JSX.Element;
  styles?: InterfaceBoxProps
}

export default function Card({
  leftTitle,
  rightTitle,
  footer,
  sectionContent,
  sectionName,
  styles
}: CardProps) {
  return (
    <Box
      bg='amber.100'
      p='3'
      borderRadius='2xl'
      justifyContent='center'
      {...styles}
    >
      <Box flexDirection='row' justifyContent='space-between' mb='3'>
        <Text fontSize='md' fontWeight='medium'>
          {leftTitle}
        </Text>
        <Text>{rightTitle}</Text>
      </Box>
      {sectionName && (
        <Box mb="3">
          <Text fontSize='sm' fontWeight='thin' mb='2'>
            {sectionName}
          </Text>
          <Box>{sectionContent}</Box>
        </Box>
      )}
      {footer && <Box>{footer}</Box>}
    </Box>
  );
}
