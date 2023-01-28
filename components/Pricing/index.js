import React from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
React.useLayoutEffect = React.useEffect

export default function Pricing() {
  const [pricingOpen, setPricingOpen] = React.useState(false);

  return (
    <>
      <Button
        colorScheme="gray"
        size='sm'
        onClick={() => setPricingOpen(true)}
      >
        pricing
      </Button>
      <Modal onClose={() => setPricingOpen(false)} size={'xl'} isOpen={pricingOpen}>
        <ModalOverlay />
        <ModalContent backgroundColor={useColorModeValue('white', 'gray.900')}>
          <ModalHeader>Upgrade Plan</ModalHeader>
          <ModalBody>
            <TableContainer>
              <Table
                // variant='striped'
                size='xs'
              >
                <Thead h={20}>
                  <Tr>
                    <Th></Th>
                    <Th><Text color={useColorModeValue('gray.800', 'gray.100')}>Free</Text></Th>
                    <Th><Text color={useColorModeValue('gray.800', 'gray.100')}>Production</Text></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr fontSize={'xs'}>
                    <Td py={2}>Price</Td>
                    <Td>0원</Td>
                    {/* <Td>$99/month</Td> */}
                    <Td>정량제(사용량에따라 부과)</Td>
                  </Tr>
                  <Tr fontSize={'xs'}>
                    <Td py={2}>Messages</Td>
                    <Td>{'< 1K messages'}</Td>
                    <Td>무제한</Td>
                  </Tr>
                  <Tr fontSize={'xs'}>
                    <Td py={2}>MAU</Td>
                    <Td>-</Td>
                    <Td>
                      {/* 2000 users per month */}
                      5,000원 / 월 100명
                    </Td>
                  </Tr>
                  {/* <Tr fontSize={'xs'}>
                    <Td py={2}>MAU Overage Rate</Td>
                    <Td>-</Td>
                    <Td>$0.03 per user</Td>
                  </Tr> */}
                  <Tr fontSize={'xs'}>
                    <Td py={2}>Storage Images</Td>
                    <Td>-</Td>
                    <Td>1,000원 / 2,000개 이미지</Td>
                    {/* <Td>$0.5 per 1000 images</Td> */}
                  </Tr>
                  <Tr fontSize={'xs'}>
                    <Td py={2}>Private 1-to-1 chat</Td>
                    <Td><CheckIcon /></Td>
                    <Td><CheckIcon /></Td>
                  </Tr>
                  <Tr fontSize={'xs'}>
                    <Td py={2}>Group chat</Td>
                    <Td><CheckIcon /></Td>
                    <Td><CheckIcon /></Td>
                  </Tr>
                  <Tr fontSize={'xs'}>
                    <Td py={2}>Read receipts</Td>
                    <Td><CheckIcon /></Td>
                    <Td><CheckIcon /></Td>
                  </Tr>
                  <Tr fontSize={'xs'}>
                    <Td py={2}>Missed message count</Td>
                    <Td><CheckIcon /></Td>
                    <Td><CheckIcon /></Td>
                  </Tr>
                  <Tr fontSize={'xs'}>
                    <Td py={2}>Push notifications</Td>
                    <Td><CheckIcon /></Td>
                    <Td><CheckIcon /></Td>
                  </Tr>
                  <Tr fontSize={'xs'}>
                    <Td py={2}>JSON messages</Td>
                    <Td><CheckIcon /></Td>
                    <Td><CheckIcon /></Td>
                  </Tr>
                  <Tr fontSize={'xs'}>
                    <Td py={2}>Image thumbnail</Td>
                    <Td><CheckIcon /></Td>
                    <Td><CheckIcon /></Td>
                  </Tr>
                  <Tr fontSize={'xs'}>
                    <Td py={2}>Message Translation</Td>
                    <Td><CheckIcon /></Td>
                    <Td><CheckIcon /></Td>
                  </Tr>
                  <Tr fontSize={'xs'}>
                    <Td py={2}>Support</Td>
                    <Td>-</Td>
                    <Td>Email</Td>
                  </Tr>

                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => setPricingOpen(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
  );
}
