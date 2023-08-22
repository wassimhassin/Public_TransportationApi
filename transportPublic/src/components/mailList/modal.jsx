import Modal from "react-modal";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./modal.css";
import { useState } from "react";

const FaqModal = ({ isOpen, closeModal }) => {
  const faqData = [
    {
      question: "What is the purpose of this application ?",
      answer: "Answer 1",
    },
  ];
  const faqData1 = [
    {
      question: "How do I reset my password ?",
      answer: "Answer 1",
    },
  ];
  const faqData2 = [
    {
      question: "What types of transportation options are available in the app ?",
      answer: "Answer 1",
    },
  ];
  const faqData3 = [
    {
      question: "How do I provide feedback on the cleanliness and condition of vehicles ?",
      answer: "Answer 1",
    },
  ];

  const [expanded, setExpanded] = useState(null);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} className="faq-modal">
      <h2>Frequently Asked Questions</h2>
      <Accordion>
        {faqData.map((faq, index) => (
          <AccordionSummary
          key={index}
          expandIcon={<ExpandMoreIcon />}
          onClick={handleAccordionChange(index)}
          aria-controls={"panel" + index + "d-content"}
          id={"panel" + index + "d-header"}
        >
          {faq.question}
        </AccordionSummary>
        
        ))}
        {faqData.map((faq, index) => (
          <AccordionDetails
            key={index}
            id={"panel" + index + "d-content"}
            className={expanded === index ? "answer-open" : "answer-closed"}
          >
            <p>{faq.answer}</p>
          </AccordionDetails>
        ))}
      </Accordion>


      <Accordion>
        {faqData1.map((faq, index) => (
          <AccordionSummary
          key={index}
          expandIcon={<ExpandMoreIcon />}
          onClick={handleAccordionChange(index)}
          aria-controls={"panel" + index + "d-content"}
          id={"panel" + index + "d-header"}
        >
          {faq.question}
        </AccordionSummary>
        
        ))}
        {faqData1.map((faq, index) => (
          <AccordionDetails
            key={index}
            id={"panel" + index + "d-content"}
            className={expanded === index ? "answer-open" : "answer-closed"}
          >
            <p>{faq.answer}</p>
          </AccordionDetails>
        ))}
      </Accordion>

      <Accordion>
        {faqData2.map((faq, index) => (
          <AccordionSummary
          key={index}
          expandIcon={<ExpandMoreIcon />}
          onClick={handleAccordionChange(index)}
          aria-controls={"panel" + index + "d-content"}
          id={"panel" + index + "d-header"}
        >
          {faq.question}
        </AccordionSummary>
        
        ))}
        {faqData2.map((faq, index) => (
          <AccordionDetails
            key={index}
            id={"panel" + index + "d-content"}
            className={expanded === index ? "answer-open" : "answer-closed"}
          >
            <p>{faq.answer}</p>
          </AccordionDetails>
        ))}
      </Accordion>

      <Accordion>
        {faqData3.map((faq, index) => (
          <AccordionSummary
          key={index}
          expandIcon={<ExpandMoreIcon />}
          onClick={handleAccordionChange(index)}
          aria-controls={"panel" + index + "d-content"}
          id={"panel" + index + "d-header"}
        >
          {faq.question}
        </AccordionSummary>
        
        ))}
        {faqData3.map((faq, index) => (
          <AccordionDetails
            key={index}
            id={"panel" + index + "d-content"}
            className={expanded === index ? "answer-open" : "answer-closed"}
          >
            <p>{faq.answer}</p>
          </AccordionDetails>
        ))}
      </Accordion>


      <button className="close-button" onClick={closeModal}>
        Close
      </button>
    </Modal>
  );
};

export default FaqModal;