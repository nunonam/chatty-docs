import { Button, Flex, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { logEvent } from "firebase/analytics";
import { analytics } from "../lib/analytics";

export default function FeedbackBlock() {
  const pageURL = typeof window !== 'undefined' ? window.location.href : ''
  const [feedbackProvided, setFeedbackProvided] = useState(false)
  const buttonBgColor = useColorModeValue('gray.800', 'gray.50')

  const feedbackValues = {
    PLUS: 1,
    MINUS: -1
  }

  useEffect(() => {
    if (sessionStorage.getItem(pageURL)) {
      setFeedbackProvided(sessionStorage.getItem(pageURL))
    } else {
      setFeedbackProvided(false)
    }
  }, [pageURL])

  const logFeedback = (feedbackDelta) => {
    logEvent(analytics, 'page-feedback', {
      feedback: feedbackDelta,
      url: pageURL
    });
    sessionStorage.setItem(pageURL, true)
    setFeedbackProvided(true)
  }

  return (
    <HStack alignItems={'center'} my={4} spacing={2}>
      <Text fontWeight={'bold'} fontSize={'sm'}>Was this page useful?</Text>
      {!feedbackProvided ? (
        <HStack>
          <Button
            colorScheme="blue"
            bgColor={buttonBgColor}
            size='xs'
            onClick={(e) => logFeedback(feedbackValues.PLUS, e)}
          >
            Yes
          </Button>
          <Button
            colorScheme="blue"
            bgColor={buttonBgColor}
            size='xs'
            onClick={(e) => logFeedback(feedbackValues.MINUS, e)}
          >
            No
          </Button>
        </HStack>
      ) : (
        <Text fontSize={'sm'}>Thank you!</Text>
      )}
    </HStack>
  )
}
