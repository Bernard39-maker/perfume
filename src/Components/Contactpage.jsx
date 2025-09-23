import React from "react";
import {
    Box,
    Flex,
    Text,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Input,
    Select,
    Textarea,
    Button,
} from "@chakra-ui/react";
import { IoMdHome, IoMdMail, IoMdCall, IoMdPin, IoMdCheckmark } from "react-icons/io";

// Keyframes for bounce effect
const bounce = `
  @keyframes bounceInOut {
    0% { transform: scale(1); }
    40% { transform: scale(0.85); }
    100% { transform: scale(1); }
  }
`;

const ContactPage = () => {
    return (
        <Box>
            {/* Inject keyframes */}
            <style>{bounce}</style>

            {/* Breadcrumb */}
            <Box backgroundColor="yellow.400" mt={10} py={5} px={{ base: 4, md: 20 }}>
                <Breadcrumb spacing="8px" separator=">>" fontSize="lg" color="black">
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/" display="flex" alignItems="center">
                            <IoMdHome style={{ marginRight: "6px" }} /> {" » "}Contact
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>

            {/* Contact Info Section */}
            <Flex
                justify="center"
                align="center"
                gap={60}
                py={20}
                direction={{ base: "column", md: "row" }}
            >
                {[
                    { icon: <IoMdMail />, title: "Email", detail: "info@xtraperfume.com" },
                    { icon: <IoMdCall />, title: "Phone", detail: "+1 (800) 333 44 55" },
                    {
                        icon: <IoMdPin />,
                        title: "Address",
                        detail: "121 King Street, New York - USA",
                    },
                ].map((item, i) => (
                    <Box key={i} textAlign="center" cursor="pointer">
                        <Box
                            bg="black"
                            color="white"
                            p={4}
                            display="inline-flex"
                            alignItems="center"
                            justifyContent="center"
                            fontSize="30px"
                            mb={4}
                            position="relative"
                            transition="all 0.2s ease-in-out"
                            _after={{
                                content: '""',
                                display: "block",
                                width: "100%",
                                height: "4px",
                                backgroundColor: "yellow.400",
                                position: "absolute",
                                bottom: "-6px",
                                left: 0,
                                transition: "all 0.2s ease-in-out",
                            }}
                            _hover={{
                                animation: "bounceInOut 0.18s linear",
                                bg: "yellow.400",
                                color: "black",
                                _after: { backgroundColor: "black" },
                            }}
                        >
                            {item.icon}
                        </Box>
                        <Text fontSize="4xl" fontFamily="serif" fontWeight="lighter" mb={2}>
                            {item.title}
                        </Text>
                        <Text color="gray.500" fontSize="lg">
                            {item.detail}
                        </Text>
                    </Box>
                ))}
            </Flex>

            {/* Map Section with Marker */}
            <Box position="relative" w="100%" h="400px">
                {/* Dark Google Map Embed */}
                <iframe
                    title="map"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.949269873118!2d-74.01312038459476!3d40.713054979331554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a31618e1b07%3A0xa6e46c8b30a1f9a9!2sFinancial%20District%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1630000000000!5m2!1sen!2sus"
                ></iframe>

                {/* Custom Marker */}
                <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    bg="yellow.400"
                    borderRadius="full"
                    p={4}
                    boxShadow="xl"
                    animation="bounceInOut 1.2s infinite"
                >
                    <IoMdCheckmark size={24} color="black" />
                </Box>
            </Box>

            {/* Floating Form Section */}
            <Flex justify="center" bg="white" mt={-20} mb={20}>
                <Box
                    bg="white"
                    p={10}
                    rounded="none"
                    boxShadow="2xl"
                    w={{ base: "90%", md: "70%", lg: "60%" }}
                >
                    <Flex gap={4} mb={4} direction={{ base: "column", md: "row" }}>
                        <Input
                            placeholder="Your Name (*)"
                            rounded="none"
                            borderColor="black"
                           _focus={{ borderColor: "black" }}
                        _placeholder={{ color: "white" }}
                        />
                        <Input
                            placeholder="Your Email (*)"
                            rounded="none"
                            borderColor="black"
                            _focus={{ borderColor: "black" }}
                        _placeholder={{ color: "white" }}
                        />
                    </Flex>
                    <Flex gap={4} mb={4} direction={{ base: "column", md: "row" }}>
                        <Input
                            placeholder="Phone"
                            rounded="none"
                            borderColor="gray.500"
                            color="black"
                           _focus={{ borderColor: "black" }}
                        _placeholder={{ color: "black" }}
                        />
                        <Select
                            placeholder="Business Department"
                            rounded="none"
                            borderColor="gray.500"
                            color="black"
                           _focus={{ borderColor: "black" }}
                        _placeholder={{ color: "black" }}
                        >
                            <option>Personal Department</option>
                            <option>Support Department</option>
                            <option>Others</option>
                        </Select>
                    </Flex>
                    <Textarea
                        placeholder="Your Question"
                        mb={6}
                        rows={5}
                        borderColor="black"
                        rounded="none"
                        _focus={{ borderColor: "black" }}
                        _placeholder={{ color: "black" }}
                    />
                    <Flex justify="center">
                        <a href="/">
                        <Button
                            bg="black"
                            color="white"
                            type="submit"
                            px={10}
                            py={6}
                            rounded="none"
                            _hover={{ bg: "yellow.400", color: "black" }}
                        >
                            Submit
                        </Button>
                        </a>
                    </Flex>
                </Box>
            </Flex>

        </Box>
    );
};

export default ContactPage;