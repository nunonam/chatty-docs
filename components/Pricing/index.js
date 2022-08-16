import React from 'react';
import { Box, Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
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
        <ModalContent>
          <ModalHeader>Upgrade Plan</ModalHeader>
          <ModalBody>
            <TableContainer>
              <Table variant='striped' size='xs'>
                <Thead h={24}>
                  <Tr>
                    <Th></Th>
                    <Th><Text>Free</Text></Th>
                    <Th><Text>Production</Text><Text fontSize={'xs'}>$99/month</Text></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr fontSize={'xs'}>
                    <Td py={2}>Messages</Td>
                    <Td>10K messages</Td>
                    <Td>Unlimited</Td>
                  </Tr>
                  <Tr fontSize={'xs'}>
                    <Td py={2}>MAU</Td>
                    <Td>-</Td>
                    <Td>5000 users per month</Td>
                  </Tr>
                  <Tr fontSize={'xs'}>
                    <Td py={2}>MAU Overage Rate</Td>
                    <Td>-</Td>
                    <Td>$0.02 per user</Td>
                  </Tr>
                  <Tr fontSize={'xs'}>
                    <Td py={2}>Storage Images</Td>
                    <Td>-</Td>
                    <Td>$0.5 per 1000 images</Td>
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
