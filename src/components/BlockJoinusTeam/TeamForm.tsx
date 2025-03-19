import React from "react";
import {
  Box,
  Stack,
  Button,
  Text,
  useColorModeValue,
  VStack,
  FormControl,
  FormLabel,
  Input as ChakraInput,
  Flex,
  Textarea,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import z from "zod";

const schema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First Name must be at least 1 characters." }),
  middleName: z.string(),
  lastName: z
    .string()
    .min(1, { message: "Last Name must be at least 1 characters." }),
  reasonToJoin: z
    .string()
    .min(1, { message: "Your answer must be at least 1 characters." })
    .max(300, {
      message: "It must be less than 300 characters.",
    }),
  chooseCommittee: z
    .string()
    .min(1, { message: "Your answer must be at least 1 characters." })
    .max(300, {
      message: "It must be less than 300 characters.",
    }),
  // contactInfo: z
  //   .string()
  //   .min(1, { message: "Contact information is required." }),
  contactInfo: z
    .string()
    .min(1, { message: "Your answer must be at least 1 characters." })
    .max(300, {
      message: "It must be less than 300 characters.",
    }),
  dateOfBirth: z.date().refine((date) => date !== null && date !== undefined, {
    message: "Please select a valid date of birth.",
  }),
  preferredPronoun: z.string().refine((pronoun) => pronoun !== "", {
    message: "Please select a preferred pronoun.",
  }),
  educationLevel: z.string().refine((value) => !!value, {
    message: "Please select your education level.",
  }),
  occupation: z
    .string()
    .min(1, { message: "Occupation must be at least 2 characters." }),
});

type FormData = z.infer<typeof schema>;

const TeamForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FieldValues) => {
    const formattedData = {
      "First Name": data.firstName,
      "Middle Name": data.middleName,
      "Last Name": data.lastName,
      "Reason to Join": data.reasonToJoin,
      "Choose Committee": data.chooseCommittee,
      "Contact Info": data.contactInfo,
      "Date of Birth": data.dateOfBirth,
      "Preferred Pronoun": data.preferredPronoun,
      "Education Level": data.educationLevel,
      "Occupation": data.occupation,
    };

    try {
      const response = await fetch("https://formspree.io/f/meojblal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        toast.success("Form submitted successfully!");
        // Reset the form after a successful submission
        reset();
        window.scrollTo(0, 0);
      } else {
        toast.error("Error submitting form");
        window.scrollTo(0, 0);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error submitting form");
      window.scrollTo(0, 0);
    }
  };

  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack
        className="outer_form_container"
        bg={useColorModeValue("gray.200", "gray.700")}
        borderRadius="xl"
        // padding={{ base: 4, sm: 6, md: 8 }}
        // marginLeft={20}
        // spacing={{ base: 8 }}
        paddingY="4rem"
        maxWidth={{ lg: "100rem" }}
        width={{ base: "100%", lg: "80rem" }}
        boxShadow="0 0 30px 1px black"
      >
        <VStack className="form_header" align="center">
          <Text
            className="form_title"
            fontSize={{ base: "3.2rem", lg: "6rem" }}
            textAlign="center"
            color={useColorModeValue("gray.700", "gray.50")}
          >
            {t("joinTheTeam")}
          </Text>
          <Text
            className="form_subtitle"
            fontSize={{ base: "1.7rem", lg: "2.2rem" }}
            color={useColorModeValue("gray.700", "gray.200")}
            marginTop={{ lg: "1rem" }}
            padding="1rem 2rem"
            textAlign="center"
          >
            {t("joinUsSubTitle")}
          </Text>
        </VStack>
        <Box
          className="inner_form_container"
          bg={useColorModeValue("gray.300", "#29303c")}
          padding="2.5rem"
          marginTop="1rem"
          marginX="auto"
          borderRadius="lg"
          boxShadow="lg"
          width="85%"
        >
          <SimpleGrid columnGap={10} columns={{ base: 1, md: 2, lg: 2 }}>
            {/* --------------------- First Name filed --------------------- */}

            <Box className="first_name_filed" width="100%" paddingBottom="2rem">
              <FormControl id="firstName" isRequired>
                <FormLabel
                  className="form_label"
                  htmlFor="firstName"
                  fontSize={{ base: "1.8rem", lg: "1.7rem" }}
                >
                  {t("firstName")}
                </FormLabel>
                <Box
                  padding="1rem"
                  bg={useColorModeValue("gray.200", "gray.600")}
                  borderRadius="lg"
                >
                  <ChakraInput
                    className="form_control"
                    id="firstName"
                    type="text"
                    placeholder={t("firstName")}
                    fontSize="1.5rem"
                    //   name="name"
                    //   width="100%"
                    //   height="4rem"
                    {...register("firstName")}
                  />
                </Box>
                {/* {errors.firstName && (
                  <Text fontSize={{ lg: "1.7rem" }} color="#D22B30">
                    {errors.firstName.message}
                  </Text>
                )} */}
              </FormControl>
            </Box>

            {/* --------------------- Middle Name filed --------------------- */}
            <Box
              className="middle_name_filed"
              width="100%"
              paddingBottom="2rem"
            >
              <FormControl id="middleName">
                <FormLabel
                  className="form_label"
                  htmlFor="middleName"
                  fontSize={{ base: "1.8rem", lg: "1.7rem" }}
                >
                  {t("middleName")}
                </FormLabel>
                <Box
                  padding="1rem"
                  bg={useColorModeValue("gray.200", "gray.600")}
                  borderRadius="lg"
                >
                  <ChakraInput
                    className="form_control"
                    id="middleName"
                    type="text"
                    placeholder={t("middleName")}
                    fontSize="1.5rem"
                    //   name="name"
                    //   width="100%"
                    //   height="4rem"
                    {...register("middleName")}
                  />
                </Box>
                {/* {errors.middleName && (
                  <Text fontSize={{ lg: "1.7rem" }} color="#D22B30">
                    {errors.middleName.message}
                  </Text>
                )} */}
              </FormControl>
            </Box>

            {/* --------------------- Last Name filed --------------------- */}
            <Box className="last_name_filed" width="100%" paddingBottom="2rem">
              <FormControl id="lastName" isRequired>
                <FormLabel
                  className="form_label"
                  htmlFor="lastName"
                  fontSize={{ base: "1.8rem", lg: "1.7rem" }}
                >
                  {t("lastName")}
                </FormLabel>
                <Box
                  padding="1rem"
                  bg={useColorModeValue("gray.200", "gray.600")}
                  borderRadius="lg"
                >
                  <ChakraInput
                    className="form_control"
                    id="lastName"
                    type="text"
                    placeholder={t("lastName")}
                    fontSize="1.5rem"
                    //   name="name"
                    //   width="100%"
                    //   height="4rem"
                    {...register("lastName")}
                  />
                </Box>
                {/* {errors.lastName && (
                  <Text fontSize={{ lg: "1.7rem" }} color="#D22B30">
                    {errors.lastName.message}
                  </Text>
                )} */}
              </FormControl>
            </Box>
          </SimpleGrid>

          <SimpleGrid
            gap={{ base: 5, lg: 20 }}
            columns={{ base: 1, md: 2, lg: 2 }}
          >
            {/* --------------------- Date of Birth field --------------------- */}
            <Box
              className="date_of_birth_field"
              width="100%"
              paddingBottom="2rem"
            >
              <FormControl id="dateOfBirth" isRequired>
                <FormLabel
                  className="form_label"
                  htmlFor="dateOfBirth"
                  fontSize={{ lg: "1.7rem" }}
                >
                  {t("dateOfBirth")}
                </FormLabel>
                <Box
                  padding="1rem"
                  bg={useColorModeValue("gray.200", "gray.600")}
                  borderRadius="lg"
                >
                  <ChakraInput
                    type="date"
                    onChange={(e) => {
                      const selectedDate = new Date(e.target.value);
                      register("dateOfBirth", {
                        value: selectedDate,
                        required: true,
                      });
                    }}
                  />
                </Box>
              </FormControl>
            </Box>

            {/* --------------------- Occupation filed --------------------- */}
            <Box className="occupation_filed" width="100%" paddingBottom="2rem">
              <FormControl id="occupation" isRequired>
                <FormLabel
                  className="form_label"
                  htmlFor="occupation"
                  fontSize={{ base: "1.8rem", lg: "1.7rem" }}
                >
                  {t("occupation")}
                </FormLabel>
                <Box
                  padding="1rem"
                  bg={useColorModeValue("gray.200", "gray.600")}
                  borderRadius="lg"
                >
                  <ChakraInput
                    className="form_control"
                    id="occupation"
                    type="text"
                    placeholder={t("occupation")}
                    fontSize="1.5rem"
                    //   name="name"
                    //   width="100%"
                    //   height="4rem"
                    {...register("occupation")}
                  />
                </Box>
                {/* {errors.occupation && (
                  <Text fontSize={{ lg: "1.7rem" }} color="#D22B30">
                    {errors.occupation.message}
                  </Text>
                )} */}
              </FormControl>
            </Box>
          </SimpleGrid>
          <SimpleGrid
            gap={{ base: 5, lg: 20 }}
            columns={{ base: 1, md: 2, lg: 2 }}
          >
            {/* --------------------- Preferred Pronoun field --------------------- */}
            <Box
              className="preferred_pronoun_field"
              width="100%"
              paddingBottom="2rem"
            >
              <FormControl id="preferredPronoun" isRequired>
                <FormLabel
                  className="form_label"
                  htmlFor="preferredPronoun"
                  fontSize={{ base: "1.8rem", lg: "1.7rem" }}
                >
                  {t("preferredPronounTitle")}
                </FormLabel>
                <Box
                  padding="1rem"
                  bg={useColorModeValue("gray.200", "gray.600")}
                  borderRadius="lg"
                >
                  <Select
                    {...register("preferredPronoun", {
                      required: "Please select a preferred pronoun.",
                    })}
                    placeholder={t("preferredPronounPlaceholder")}
                    fontSize="1.5rem"
                  >
                    <option value="she, her"> {t("sheHer")}</option>
                    <option value="he, him">{t("heHim")}</option>
                    <option value="they, them">{t("theyThem")}</option>
                    <option value="other">{t("other")}</option>
                  </Select>
                </Box>
                {/* {errors.preferredPronoun && (
                  <Text fontSize={{ lg: "1.7rem" }} color="#D22B30">
                    {errors.preferredPronoun.message}
                  </Text>
                )} */}
              </FormControl>
            </Box>

            {/* --------------------- Education Level Dropdown --------------------- */}
            <Box
              className="education_level_field"
              width="100%"
              paddingBottom="2rem"
            >
              <FormControl id="educationLevel" isRequired>
                <FormLabel
                  className="form_label"
                  htmlFor="educationLevel"
                  fontSize={{ base: "1.8rem", lg: "1.7rem" }}
                >
                  {t("educationLevel")}
                </FormLabel>
                <Box
                  padding="1rem"
                  bg={useColorModeValue("gray.200", "gray.600")}
                  borderRadius="lg"
                >
                  <Select
                    {...register("educationLevel")}
                    placeholder="Select your education level"
                    fontSize="1.5rem"
                  >
                    <option value="Bachelors">Bachelors</option>
                    <option value="Masters">Masters</option>
                    <option value="PhD">PhD</option>
                    <option value="Postdoc">Postdoc</option>
                    <option value="Other">Other</option>
                  </Select>
                </Box>
                {/* {errors.educationLevel && (
                  <Text fontSize={{ lg: "1.7rem" }} color="#D22B30">
                    {errors.educationLevel.message}
                  </Text>
                )} */}
              </FormControl>
            </Box>
          </SimpleGrid>
          {/* --------------------- Hear About As field --------------------- */}
          {/* <Box
            className="hear_about_us_field"
            width="100%"
            paddingBottom="2rem"
          >
            <FormControl id="hearAboutUs" isRequired>
              <FormLabel
                className="form_label"
                htmlFor="hearAboutUs"
                fontSize={{ lg: "1.7rem" }}
              >
                How did you hear about us?
              </FormLabel>
              <CheckboxGroup>
                <VStack align="start">
                  <Checkbox
                    value="university"
                    fontSize="lg"
                    size="lg"
                    iconSize="1.2em"
                    marginBottom="0.5rem"
                    {...register("hearAboutUs", {
                      required: "Please select at least one option.",
                    })}
                  >
                    University
                  </Checkbox>

                  <Checkbox
                    value="friends"
                    fontSize="lg"
                    size="lg"
                    iconSize="1.2em"
                    marginBottom="0.5rem"
                    {...register("hearAboutUs", {
                      required: "Please select at least one option.",
                    })}
                  >
                    Friends
                  </Checkbox>

                  <Checkbox
                    value="instagram"
                    fontSize="lg"
                    size="lg"
                    iconSize="1.2em"
                    marginBottom="0.5rem"
                    {...register("hearAboutUs", {
                      required: "Please select at least one option.",
                    })}
                  >
                    Instagram
                  </Checkbox>

                  <Checkbox
                    value="facebook"
                    fontSize="lg"
                    size="lg"
                    iconSize="1.2em"
                    marginBottom="0.5rem"
                    {...register("hearAboutUs", {
                      required: "Please select at least one option.",
                    })}
                  >
                    Facebook
                  </Checkbox>
                  <Checkbox
                    value="twitter"
                    fontSize="lg"
                    size="lg"
                    iconSize="1.2em"
                    marginBottom="0.5rem"
                    {...register("hearAboutUs", {
                      required: "Please select at least one option.",
                    })}
                  >
                    Twitter
                  </Checkbox>
                  <Checkbox
                    value="other"
                    fontSize="lg"
                    size="lg"
                    iconSize="1.2em"
                    marginBottom="0.5rem"
                    {...register("hearAboutUs", {
                      required: "Please select at least one option.",
                    })}
                  >
                    Other
                  </Checkbox>
                </VStack>
              </CheckboxGroup>
              {errors.hearAboutUs && (
                <Text fontSize={{ lg: "1.7rem" }} color="#D22B30">
                  Please select at least one option.
                </Text>
              )}
            </FormControl>
          </Box> */}

          {/* --------------------- Reason to Join ---------------------  */}
          <Box
            className="reason_to_join_field"
            width="100%"
            paddingBottom="2rem"
          >
            <FormControl id="reasonToJoin" isRequired>
              <FormLabel
                className="form_label"
                htmlFor="reasonToJoin"
                fontSize={{ base: "1.8rem", lg: "1.7rem" }}
              >
                {t("reasonToJoinTeamTitle")}
              </FormLabel>
              <Box
                padding="1rem"
                bg={useColorModeValue("gray.200", "gray.600")}
                borderRadius="lg"
              >
                <Textarea
                  {...register("reasonToJoin")}
                  placeholder={t("reasonToJoinTeamPlaceholder")}
                  fontSize="1.5rem"
                  width="100%"
                  height="15rem"
                />
              </Box>
              {/* {errors.reasonToJoin && (
                <Text fontSize={{ lg: "1.7rem" }} color="#D22B30">
                  {errors.reasonToJoin.message}
                </Text>
              )} */}
            </FormControl>
          </Box>

          {/* --------------------- Choose Committee --------------------- */}
          <Box
            className="choose_committee_field"
            width="100%"
            paddingBottom="2rem"
          >
            <FormControl id="chooseCommittee" isRequired>
              <FormLabel
                className="form_label"
                htmlFor="chooseCommittee"
                fontSize={{ base: "1.8rem", lg: "1.7rem" }}
              >
                {t("favoriteCommitteeTitle")}
              </FormLabel>
              <Box
                padding="1rem"
                bg={useColorModeValue("gray.200", "gray.600")}
                borderRadius="lg"
              >
                <Textarea
                  {...register("chooseCommittee")}
                  placeholder={t("favoriteCommitteePlaceholder")}
                  fontSize="1.5rem"
                  width="100%"
                  height={{ base: "16rem", lg: "8rem" }}
                />
              </Box>

              {/* {errors.chooseCommittee && (
                <Text fontSize={{ lg: "1.7rem" }} color="#D22B30">
                  {errors.chooseCommittee.message}
                </Text>
              )} */}
            </FormControl>
          </Box>

          {/* --------------------- Contact Info ---------------------  */}
          <Box className="contact_info_field" width="100%" paddingBottom="2rem">
            <FormControl id="contactInfo" isRequired>
              <FormLabel
                className="form_label"
                htmlFor="contactInfo"
                fontSize={{ base: "1.8rem", lg: "1.7rem" }}
              >
                {t("contactInfoTitle")}
              </FormLabel>
              <Box
                padding="1rem"
                bg={useColorModeValue("gray.200", "gray.600")}
                borderRadius="lg"
              >
                <Textarea
                  {...register("contactInfo")}
                  placeholder={t("contactInfoPlaceholder")}
                  fontSize="1.5rem"
                  width="100%"
                  height="10rem"
                />
              </Box>
              {/* {errors.contactInfo && (
                <Text fontSize={{ lg: "1.7rem" }} color="#D22B30">
                  {errors.contactInfo.message}
                </Text>
              )} */}
            </FormControl>
          </Box>

          <Flex
            className="button_container"
            justifyContent="center"
            marginTop="1.5rem"
          >
            <Button
              className="submit_button"
              isDisabled={!isValid}
              width="100%"
              height="5rem"
              type="submit"
              fontSize={{ lg: "2rem" }}
            >
              {t("submit")}
            </Button>
          </Flex>
        </Box>
      </Stack>
      <ToastContainer />
    </form>
  );
};

export default TeamForm;
