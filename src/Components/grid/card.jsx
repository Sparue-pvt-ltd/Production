import React from "react";
const Card = () => {
  const Items = [
    {
      heading: "Network Security ",
      content:
        "Workloads are isolated using Virtual Private Cloud.Security componentslike NACL, Security Groups, Subnets and VPN access are provisioned for secure access to the application."
    },
    {
      heading: "Data Security  ",
      content:
        "Data is the most criticxal asset of any organization.We help you protect your data at rest as well as in motion to help you meet all security compliance and regulations."
    },
    {
      heading: "Security Informatin & Event managment",
      content:
        "Security Incident and Event Management is fast becoming an integral part of the security ecosystem.We provide solutions that aggregate data from multiple systems and analyze that data to catch abnormal behavior or potential cyberattacks."
    },
    {
      heading: "Identity & Access Management",
      content:
        "Sparue can help run and operate the entire user provisioning, access management and governance reporting solutions across hybrid and public clouds."
    },
    {
      heading: "Security Management, Governance, and Compliance ",
      content:
        "To help our Customers migrate their regulated workloads to AWS, we provision your infrastructure with a VPC in the public cloud that is compliant varied security standards such as PCI security standard, (SOC) 1 standard."
    },
    {
      heading: " Code Access Security  ",
      content:
        "We have helped multiple Customers protect their network and applications against outside threats by using our firewalls and WAF solutions."
    }
  ];
  return (
    <>
      {Items.map((item) => {
        return (
          <div className="item item-1">
            <i class="fas fa-key"> </i>
            <h4> {item.heading}</h4>
            <p>{item.content}</p>
          </div>
        );
      })}
    </>
  );
};
export default Card;
