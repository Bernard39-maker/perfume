import React, { useState } from "react";
import {
    Box,
    Flex,
    Heading,
    Text,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Image,
    SimpleGrid,
} from "@chakra-ui/react";
import { IoMdHome, IoMdCheckmarkCircleOutline } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

const Aboutpage = () => {

    const testimonials = [
        {
            quote:
                "Your company have been great at keeping me in work, they always line something else up.",
            name: "Angelina Depp",
            role: "Designer",
            image: "/t11.jpeg",
        },
        {
            quote:
                "Your company have been great at keeping me in work, they always line something else up.",
            name: "Dimitry Chiankov",
            role: "CEO of Company",
            image: "/t12.jpeg",
        },
        {
            quote:
                "Your company have been great at keeping me in work, they always line something else up.",
            name: "Amanda Person",
            role: "Blogger",
            image: "https://xtratheme.com/elementor/perfume-shop/wp-content/uploads/sites/80/2019/08/t13-150x150.jpg",
        },
    ];

    const [current, setCurrent] = useState(0);

    const MotionBox = motion(Box);


    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    return (
        <Box>

            <Box
                backgroundColor="yellow.400"
                marginTop="10"
                py={5}
                px={{ base: 4, md: 20 }}
            >
                <Breadcrumb
                    spacing="8px"
                    separator=">>"
                    fontSize="lg"
                    color="black"
                >
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/" display="flex" alignItems="center">
                            <IoMdHome style={{ marginRight: "6px" }} /> {" » "}About
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>

            {/* About Section */}
            <Flex
                direction={{ base: "column", md: "row" }}
                align="flex-start"
                justify="space-between"
                py={20}
                px={{ base: 6, md: 20 }}
                gap={10}
            >
                <Box flex="1" pr={{ md: 10 }}>
                    <Heading as="h1" mb={4} fontFamily="serif">
                        <Text as="span" fontSize="60px">
                            About{" "}
                        </Text>
                        <Text as="span" fontSize="60px" color="yellow.400">
                            us
                        </Text>
                    </Heading>

                    <Text
                        fontSize="2xl"
                        letterSpacing="2px"
                        mb={6}
                        color="blackAlpha.600"
                    >
                        WHO WE ARE?
                    </Text>

                    <Text fontSize="xl" color="blackAlpha.600" mb={10}>
                        Perfume is a mixture of fragrant essential oils or aroma
                        compounds, fixatives and solvents, usually in liquid form,
                        used to give the human body, animals, food, objects, and
                        living-spaces an agreeable scent. The 1939 Nobel Laureate
                        for Chemistry, Leopold Ružička stated in 1945 that "right
                        from the earliest days of scientific chemistry up to the
                        present time perfumes have substantially contributed to the
                        development of organic chemistry as regards methods,
                        systematic classification, and theory."
                        <br />
                        <br />
                        Ancient texts and archaeological excavations show the use
                        of perfumes in some of the earliest human civilizations.
                        Modern perfumery began in the late 19th century with the
                        commercial synthesis of aroma compounds such as vanillin or
                        coumarin, which allowed for the composition of perfumes with
                        smells previously unattainable solely from natural
                        aromatics.
                    </Text>

                    {/* Features Grid */}
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                        {[
                            "Good Woods",
                            "Natural Materials",
                            "Best Fabrics",
                            "Free Shipping",
                            "15 Days Refund",
                            "Friendly Support",
                        ].map((feature, i) => (
                            <Flex key={i} align="center">
                                <Box
                                    bg="yellow.400"
                                    w="45px"
                                    h="45px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    borderRadius="sm"
                                    mr={3}
                                >
                                    <IoMdCheckmarkCircleOutline
                                        color="white"
                                        fontWeight="bold"
                                        fontSize="xl"
                                    />
                                </Box>
                                <Text fontSize="lg" color="black">
                                    {feature}
                                </Text>
                            </Flex>
                        ))}
                    </SimpleGrid>
                </Box>

                {/* Right Side: Image + Experience */}
                <Box
                    flex="1"
                    display="flex"
                    flexDirection="column"
                    h={{ base: "auto", md: "600px" }}
                >
                    <Box flex="7">
                        <Image
                            src="/img7.jpeg"
                            alt="Perfume Bottle"
                            objectFit="cover"
                            w="100%"
                            h="100%"
                        />
                    </Box>

                    <Box
                        flex="3"
                        bg="black"
                        color="white"
                        textAlign="center"
                        py={10}
                        px={6}
                    >
                        <Heading
                            as="h2"
                            fontSize={{ base: "2xl", md: "60px" }}
                            fontFamily="serif"
                            mb={4}
                        >
                            23 Years <br /> of experience
                        </Heading>

                        <Text fontSize="lg" color="yellow.500" maxW="2xl" mx="auto">
                            Professional, affordable and we always <br />
                            leave the seat down
                        </Text>
                    </Box>
                </Box>
            </Flex>

            {/* History Section */}
            <Flex
                direction={{ base: "column", md: "row" }}
                align="stretch"
                justify="space-between"
                py={20}
                px={{ base: 6, md: 20 }}
                gap={10}
            >
                <Box flex="1">
                    <Image
                        src="/img7.jpeg"
                        alt="Perfume History"
                        objectFit="cover"
                        w="100%"
                        h={{ base: "300px", md: "500px" }}
                    />
                </Box>

                <Box flex="1">
                    <Heading as="h2" fontSize={{ base: "3xl", md: "60px" }} mb={4}>
                        <Text as="span" fontWeight="light">
                            Our{" "}
                        </Text>
                        <Text as="span" color="yellow.400">
                            History
                        </Text>
                    </Heading>

                    <Text
                        fontSize="xl"
                        letterSpacing="2px"
                        mb={6}
                        color="blackAlpha.600"
                    >
                        WHAT WE DONE?
                    </Text>

                    <Text fontSize="xl" color="blackAlpha.600" mb={10}>
                        People have been using natural objects, such as tree stumps,
                        rocks and moss, as furniture since the beginning of human
                        civilisation. Archaeological research shows that from around
                        30,000 years ago, people began constructing and carving their
                        own furniture, using wood, stone, and animal bones.
                    </Text>

                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                        {[
                            { value: "370", label: "Perfumes" },
                            { value: "7k", label: "Happy Clients" },
                            { value: "25+", label: "Branches" },
                        ].map((stat, i) => (
                            <Box key={i}>
                                <Box
                                    bg="yellow.400"
                                    color="white"
                                    fontWeight="bold"
                                    width="65%"
                                    textAlign="center"
                                >
                                    <Text fontSize="5xl">{stat.value}</Text>
                                </Box>
                                <Text fontSize="xl" ml="2" mt={2} color="blackAlpha.600">
                                    {stat.label}
                                </Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                </Box>
            </Flex>

            {/* Testimonials Section */}
            <Box py={20} px={{ base: 6, md: 20 }} textAlign="center">
                <Heading
                    as="h2"
                    fontSize={{ base: "3xl", md: "50px" }}
                    mb={10}
                    fontFamily="serif"
                    textAlign="center"
                    position="relative"
                    lineHeight="1.2"
                >
                    
                    <Text
                        as="span"
                        fontSize={{ base: "28px", md: "42px" }}
                        color="yellow.400"
                        fontFamily="'Dancing Script', cursive"
                        position="absolute"
                        top="-20px"
                        left="50%"
                        transform="translateX(-50%)"
                        whiteSpace="nowrap"
                        fontWeight="400"
                        zIndex={0}
                        opacity={0.9}
                    >
                        Testimonials
                    </Text>

                    
                    <Text
                        as="span"
                        position="relative"
                        zIndex={1}
                        fontWeight="lighter"
                        fontFamily="'Playfair Display', serif"
                    >
                        What Our Clients Say?
                    </Text>
                </Heading>


                {/* Carousel */}
                <Box position="relative" maxW="4xl" mx="auto">
                    {/* Left Arrow */}
                    <Box
                        as="button"
                        position="absolute"
                        left="-50px"
                        top="10%"
                        transform="translateY(-50%)"
                        bg="white"
                        border="1px solid"
                        borderColor="gray.300"
                        rounded="full"
                        w="40px"
                        h="40px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        cursor="pointer"
                        _hover={{ bg: "black", color: "white" }}
                        onClick={prevSlide}
                    >
                        ←
                    </Box>

                    {/* Animated Testimonial Card */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                            <Box bg="gray.50" p={10}>
                                <Text fontSize="xl" mb={6}>
                                    "{testimonials[current].quote}"
                                </Text>

                                <Flex align="center" gap={4} justify="center">
                                    <Image
                                        src={testimonials[current].image}
                                        alt={testimonials[current].name}
                                        boxSize="120px"
                                        objectFit="cover"

                                    />
                                    <Box textAlign="left">
                                        <Text fontWeight="bold" fontSize="2xl">
                                            {testimonials[current].name}
                                        </Text>
                                        <Text color="gray.500">
                                            {testimonials[current].role}
                                        </Text>
                                    </Box>
                                </Flex>
                            </Box>
                        </motion.div>
                    </AnimatePresence>


                    <Box
                        as="button"
                        position="absolute"
                        right="-50px"
                        top="10%"
                        transform="translateY(-50%)"
                        bg="white"
                        border="1px solid"
                        borderColor="gray.300"
                        rounded="full"
                        w="40px"
                        h="40px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        cursor="pointer"
                        _hover={{ bg: "black", color: "white" }}
                        onClick={nextSlide}
                    >
                        →
                    </Box>
                </Box>

                {/* Dots */}
                <Flex justify="center" mt={6} gap={3}>
                    {testimonials.map((_, i) => (
                        <Box
                            key={i}
                            w="10px"
                            h="10px"
                            rounded="full"
                            bg={i === current ? "gray.500" : "gray.300"}
                            cursor="pointer"
                            onClick={() => setCurrent(i)}
                        />
                    ))}
                </Flex>
            </Box>
        </Box>
    );
};

export default Aboutpage;
