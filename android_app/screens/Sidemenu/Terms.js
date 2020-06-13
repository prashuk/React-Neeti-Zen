import React from "react";
import { StyleSheet, StatusBar, ScrollView } from "react-native";
import { Block, Text, theme } from "galio-framework";

class Terms extends React.Component {
  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 0 }}
        keyboardShouldPersistTaps="always"
      >
        <Block flex style={styles.container}>
          <StatusBar barStyle="light-content" />

          <Block flex>
            <Block style={styles.padded}>
              <Block>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 35 }}>
                  Please read these terms of service and our privacy notice
                  (together, these “Terms”) carefully as they form a contract
                  between you and us and govern use of and access to the
                  Service(s), mobile app and websites by you, your affiliates,
                  users and end-users. In the event of a conflict between these
                  terms of service and Our Privacy Notice, these terms of
                  service shall prevail.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  By accessing or using this Mobile app or website in any way,
                  including using any Services, downloading Materials or
                  browsing the Site (Services, Materials and Site defined
                  below), you agree to and are bound by the terms and conditions
                  set forth in this document. If you do not agree to all of the
                  terms and conditions contained in the Terms of Use, do not
                  access or use Neetizen and its associated services and
                  incidentals.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  To participate on the Site, you must accept these Terms of Use
                  by clicking the “I accept” button at the end of this document.
                  Upon such acceptance, you will be given a unique (login id)
                  for participation and use of this Site.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  You, as an individual, must be 18 years or older to access or
                  use the Websites and the Service(s).
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  1. YOUR RIGHTS
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  1.1 These Terms are applicable when you are accessing our
                  mobile app or website.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  1.2 Using Our Service(s): Subject to Your compliance with the
                  Terms and solely during the duration of Usage, You have the
                  limited, non-exclusive, and revocable right to access and use
                  the Service(s) for Your internal purposes. You shall be
                  responsible for use of the Service(s) through Your Account by
                  any third parties. You may subscribe to one or more of the
                  Service(s). They may be subject to separate and distinct
                  Service Plans.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  "Services" means all services and resources offered or enabled
                  via the Site or Mobile app by Neetizen and users of this site,
                  including download areas, developer tools services,
                  information services and communication services such as
                  calendars, chat areas, communities, e-mail, forums,
                  newsgroups, and other message or communication or designed to
                  enable you to do business or communicate with others.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  1.3 Using our APIs: Where applicable, our APIs must be used
                  according to the API Policies We implement in this regard.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  1.4 Using our Mobile Applications: Subject to Your compliance
                  with the Terms and solely during the duration of Usage, You
                  have the limited, non-exclusive, non-transferrable, and
                  revocable right to download, install and use the Mobile
                  Applications to access and use the Service(s).
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  2. YOUR RESPONSIBILITIES
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  2.1 Your Account: Subject to any limitation on the number of
                  individual Users available under the Service provided to You
                  by Neetizen, access and use of the Service(s) is restricted to
                  the specified number of individual Users permitted under Your
                  subscription to the Service(s). Each User shall be identified
                  using unique login information such as usernames and passwords
                  (“User Login”) and such User Login shall be used only by one
                  individual. If You are a managed service provider and You wish
                  to use the same User Login across Accounts that You manage for
                  Your clients, You acknowledge that it is Your sole
                  responsibility to obtain necessary consents from such clients.
                  Without prejudice to Our obligations under Sections 8 and 9 of
                  these Terms, You are solely responsible for the
                  confidentiality of Service Data and User Login at Your end.
                  You should, therefore, not share Your User Login with any
                  third parties. In any event, unless You notify Us of any
                  unauthorized use or suspicious activity in Your Account, You
                  are responsible for all activities that occur under Your
                  Account. Neetizen will not be liable for any damage or loss
                  that may result from Your failure to protect Your login
                  information, including Your password. Without limiting the
                  foregoing, You are solely responsible for ensuring that Your
                  use of the Service(s) to store and transmit Service Data is
                  compliant with all applicable laws and regulations. You also
                  maintain all responsibility for determining whether the
                  Service(s) or the information generated thereby is accurate or
                  sufficient for Your purposes.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  2.2 Your use of the Service(s): You agree not to (a) license,
                  sublicense, sell, resell, rent, lease, transfer, assign,
                  distribute, time share or otherwise commercially exploit or
                  make the Service(s) available to any third party, other than
                  Users and End-Users in furtherance of Your internal business
                  purposes as expressly permitted by these Terms; (b) use the
                  Service(s) to Process data on behalf of any third party other
                  than Your Users and End-Users; (c) modify, adapt, or hack the
                  Service(s) or otherwise attempt to gain or gain unauthorized
                  access to the Service(s) or related systems or networks; (d)
                  falsely imply any sponsorship or association with Us; (e) use
                  the Service(s) in any unlawful manner, including but not
                  limited to violation of any person’s privacy rights; (f) use
                  the Service(s) to send unsolicited communications junk mail,
                  spam, pyramid schemes or other forms of duplicative or
                  unsolicited messages; (g) use the Service(s) to store or
                  transmit any content that infringes upon any person’s
                  intellectual property rights; (h) use the Service(s) in any
                  manner that interferes with or disrupts the integrity or
                  performance of the Service(s) and its components; (i) attempt
                  to decipher, decompile, reverse engineer, disassemble,
                  reproduce, or copy or otherwise access or discover the source
                  code or underlying program of any Software making up the
                  Service(s); (j) use the Service(s) to knowingly post,
                  transmit, upload, link to, send or store any content that is
                  unlawful, racist, hateful, abusive, libelous, obscene, or
                  discriminatory; (k) use the Service(s) to store or transmit
                  any “protected health information” as that term is defined
                  Minister of Communication an Information Technology
                  Notification Dated April 11, 2011 unless expressly agreed to
                  otherwise in writing by Us; (l) use the Service(s) to
                  knowingly post, transmit, upload, link to, send or store any
                  viruses, malware, Trojan horses, time bombs, or any other
                  similar harmful software (“Malicious Software”); (m) establish
                  a link to Our Websites or mobile app in such a way as to
                  suggest any form of association, approval or endorsement on
                  Our part where none exists; (n) use the Service(s) for the
                  purposes of cookie tracking, ad exchanges, ad networks, data
                  brokerages, or sending electronic communications (including
                  e-mail) in violation of applicable law; (o) use of the
                  Service(s) for any purpose prohibited by applicable export
                  laws and regulations, including without limitation, nuclear,
                  chemical, or biological weapons proliferation, or development
                  of missile technology; (p) try to use, or use the Service(s)
                  in violation of these Terms.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  2.3 You shall be responsible for any loss of data or attempted
                  or actual access or use of the Service(s) through Your Account
                  in violation of these Terms.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  2.4 If We inform You that a specified activity or purpose is
                  prohibited with respect to the Service(s), You will ensure
                  that You immediately cease use of the Service(s) for such
                  prohibited activity or purpose.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  3. ACCESS TO THE SERVICE(S)
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  3.1 You may not be able to access or use the Service(s) (a)
                  during planned downtime for upgrades and maintenance to the
                  Service(s) (of which We will use commercially reasonable
                  efforts to notify You in advance through Our Service(s))
                  (“Planned Downtime”), or (b) during any unavailability caused
                  by circumstances beyond Our reasonable control, such as, but
                  not limited to, acts of God, acts of government, acts of
                  terror or civil unrest, technical failures beyond Our
                  reasonable control (including, without limitation, inability
                  to access the internet), or acts undertaken by third parties,
                  including without limitation, distributed denial of service
                  attacks.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  3.2 We will use commercially reasonable efforts to schedule
                  Planned Downtime for weekends (Indian Standard Time) and other
                  off-peak hours.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  4. CHANGES TO THE SERVICE(S), MOBILE ALL AND WEBSITES
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  4.1 Our Service(s): We may update the Service(s) from time to
                  time and You may receive notifications of such upgrades,
                  enhancements or updates (“Updates”). Any new or modified
                  features added to or augmenting or otherwise modifying the
                  Service(s) or other updates, modifications or enhancements to
                  the Service(s) are also subject to these Terms and We reserve
                  the right to deploy Updates at any time.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  4.2 Mobile App & Websites: We may also change content on Our
                  Mobile App or Our Websites at any time. However, please note
                  that any of the content on Our Websites may be out of date at
                  any given time, and We are under no obligation to update it.
                  For clarity, this sub-section refers to Our Mobile App Our
                  Websites excluding the Service(s). We may discontinue or
                  change any part of Our Websites, that does not affect the
                  Service(s), without notifying You. Our Mobile App or Websites
                  may contain links to websites, content and resources provided
                  by third parties (“Third Party Links”). These Third Party
                  Links are governed by their own terms and privacy policies and
                  You agree that We have no control over these Third Party Links
                  and are not responsible for Your access or use of these Third
                  Party Links.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  5. INTELLECTUAL PROPERTY RIGHTS
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  All the Neetizen Materials and Services including their
                  selection and arrangement are the Intellectual Property of
                  Neetizen including but not limited to copyrights, trademarks,
                  patents, trade secrets and all other intellectual property and
                  proprietary rights ("Intellectual Property Rights").{" "}
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  Any unauthorized use of the Neetizen Materials or Services may
                  violate such laws and the Terms of Use. Unless expressly
                  provided herein, Neetizen does not grant any express or
                  implied rights to use the Materials and Services.{" "}
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  It is deemed admitted that you agree not to copy, republish,
                  frame, download, transmit, modify, adapt, create derivative
                  works based on, rent, lease, loan, sell, assign, distribute,
                  display, perform, license, sublicense or reverse engineer the
                  Site, Materials or Services, any portions of the Site,
                  Materials or Services or the selection and arrangement of the
                  Site, Materials or Services, except as expressly authorized
                  herein. In addition, you agree not to use any data mining,
                  robots or similar data gathering and extraction methods in
                  connection with the Site, Services or Materials.{" "}
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  The trademarks, logos and service marks ("Marks") displayed on
                  this Site are the property of Neetizen or other third parties.
                  You are not permitted to use the Marks without the prior
                  written consent of Neetizen or such third party that may own
                  the Marks.{" "}
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  Use of the Neetizen Materials or User Content for any other
                  purpose is expressly prohibited and may result in severe civil
                  and criminal penalties. Violators will be prosecuted to the
                  maximum extent possible.{" "}
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  6. OTHER SERVICES
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  Certain other services (“Other Services”) such as
                  integrations, Apps and Custom Apps are made available to You
                  through the Market Place or other forums where applications
                  are developed for their integration with the Service(s). These
                  Other Services are governed by their own terms and privacy
                  policies and You agree that We are not responsible for Your
                  use of these Other Services where You choose to enable these
                  Other Services and integrate them into Our Service(s). By
                  enabling the Other Services, You understand and agree that We
                  do not provide any warranties whatsoever for Other Services
                  and We are not liable for any damage or loss caused or alleged
                  to be caused by or in connection with Your enablement, access
                  or use of any such Other Services, or Your reliance on the
                  privacy practices, data security processes or other policies
                  of such Other Services. You understand that We are not
                  responsible for providing technical support for Other Services
                  and that We are not responsible for the data hosting and data
                  transfer practices followed by providers of such Other
                  Services. To this extent, You shall address any comments,
                  queries, complaints or feedback about such Other Services to
                  the respective developers or publishers as specified in the
                  Market Place or other forums.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  7. SUSPENSION AND TERMINATION
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  7.1 We shall not be liable to You or any other third party for
                  suspension or termination of Your Account, or access to and
                  use the Service(s), if such suspension or termination is in
                  accordance with these Terms.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  7.2 Customers using Service(s): If You are using any of Our
                  Service(s), Your Account may be suspended or terminated in the
                  following manner:
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  7.2.1 We may suspend Your access to and use of Your Account or
                  the Service(s) if You are in violation of the Terms. We will
                  notify You of Your activities that violate these Terms and, at
                  Our sole discretion, provide You with a period of fifteen (15)
                  days (“Cure Period”) to cure or cease such activities. If You
                  do not cure or cease such activities within said Cure Period
                  or if We believe that Your breach of these Terms cannot be
                  cured, Your Account shall be terminated. Any associated
                  Service Data shall be retained for a period of 14 days from
                  the date of termination of Your Account beyond which it shall
                  be deleted during the normal course of operation.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  7.2.2 You may elect to terminate Your Account at any time from
                  within Our Service(s), You may request to terminate Your
                  Account by writing to neetizenhelp@gmail.com. Any associated
                  Service Data shall be retained for a period of 14 days from
                  the date of termination of Your Account beyond which it shall
                  be deleted during the normal course of operation.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  7.2.3 We may suspend Your Account upon expiry. We shall retain
                  any associated Service Data for a period of 6 months beyond
                  which Your Account shall be terminated and all associated
                  Service Data shall be deleted immediately and permanently.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  7.3 Effect of Terminating Your Account:
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  8.4.1 Data Export: We strongly recommend that You export all
                  Service Data before You terminate Your Account. In any event,
                  following the termination of Your Account either by You or Us,
                  unless otherwise specified elsewhere herein or in the
                  Supplemental Terms, Service Data will be retained or deleted
                  in accordance with Sections 8.2 as applicable to You. Where
                  the Service Data is retained as described herein, You may
                  contact Us within such data retention period to export Your
                  Service Data. Service Data cannot be recovered once it is
                  deleted. Further, when Service Data is migrated from one data
                  center to another upon Your request, We shall delete Service
                  Data from the original data center after 14 days from such
                  migration.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  8. CONFIDENTIALITY
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  8.2 Confidentiality obligations: Each of us will protect the
                  other’s Confidential Information from unauthorized use, access
                  or disclosure in the same manner as each of us protects our
                  own Confidential Information, and in any event, no less than
                  reasonable care. Except as otherwise expressly permitted
                  pursuant to these Terms, each of us may use the other’s
                  Confidential Information solely to exercise our respective
                  rights and perform our respective obligations under these
                  Terms and shall disclose such Confidential Information solely
                  to those of our respective employees, representatives and
                  agents who have a need to know such Confidential Information
                  for such purposes and who are bound to maintain the
                  confidentiality of, and not misuse, such Confidential
                  Information. The provisions of this sub-section shall
                  supersede any non-disclosure agreement by and between You and
                  Us entered prior to these Terms that would purport to address
                  the confidentiality of Service Data and such agreement shall
                  have no further force or effect with respect to Service Data.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  9. DATA PRIVACY AND SECURITY
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  9.1 Security of Service Data: We use appropriate technical and
                  organizational measures to protect the Service Data that we
                  Process. The measures we use are designed to provide a level
                  of security appropriate to the risk of processing your Service
                  Data.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  9.2 You understand that Neetizen shall Process Service Data in
                  accordance with Applicable Data Protection Laws which are
                  incorporated into these Terms and in accordance with Our
                  Privacy Policy. You acknowledge and agree that Neetizen may
                  also access or disclose information about You, Your Account,
                  Users or End-Users, including Service Data, in order to (a)
                  comply with the law or respond to lawful requests or legal
                  process; (b) protect Neetizen’s or Our customers’ or partners’
                  rights or property, including enforcement of these Terms or
                  other policies associated with the Service(s); (c) act on a
                  good faith belief that such disclosure is necessary to protect
                  personal safety or avoid violation of applicable law or
                  regulation. Further, at Our sole discretion, any suspected
                  fraudulent, abusive, or illegal activity by You may be
                  referred to law enforcement authorities.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  10. DATA MIGRATION
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  During the duration of Usage, You may request Us to import
                  data into Your Account ("Data Migration"). You hereby
                  understand and acknowledge that We and/or Our Group Companies
                  may access and process Your data in connection with providing
                  You support during such Data Migration.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  11. COMMUNICATIONS FROM US
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  Apart from the communications specified in Our Privacy Notice,
                  We may contact You directly via e-mail to notify You if
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  a. You are in violation of these Terms;
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  b. A specific activity or purpose is prohibited with respect
                  to the Service(s), so that You immediately cease use of the
                  Service(s) for such prohibited activity or purpose; or
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  c. You maintain an unusually high monthly ticket ratio per
                  Users, an unusually high level of open tickets or other
                  excessive stress on the Service(s).
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  12. DISCLAIMER OF WARRANTIES
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  THE MOBILE APP, THE WEBSITES AND THE SERVICE(S), INCLUDING ALL
                  SERVER AND NETWORK COMPONENTS ARE PROVIDED ON AN “AS IS” AND
                  “AS AVAILABLE” BASIS, WITHOUT ANY WARRANTIES OF ANY KIND TO
                  THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW. WE EXPRESSLY
                  DISCLAIM ANY AND ALL CONDITIONS, REPRESENTATIONS, WARRANTIES
                  OR OTHER TERMS, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT
                  LIMITED TO, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, TITLE,
                  FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  YOU ACKNOWLEDGE THAT WE DO NOT WARRANT THAT THE SERVICE(S),
                  THE MOBILE APP OR WEBSITES WILL BE UNINTERRUPTED, TIMELY,
                  SECURE OR ERROR-FREE AND YOU FURTHER ACKNOWLEDGE THAT WE DO
                  NOT WARRANT THAT THE ACCESS TO THE SERVICE(S), WHICH IS
                  PROVIDED OVER INTERNET AND VARIOUS TELECOMMUNICATIONS
                  NETWORKS, ALL OF WHICH ARE BEYOND OUR CONTROL, WILL BE
                  UNINTERRUPTED, TIMELY, SECURE, ERROR-FREE OR FREE FROM VIRUSES
                  OR OTHER MALICIOUS SOFTWARE.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  THE CONTENT ON OUR MOBILE APP OR WEBSITES IS PROVIDED FOR
                  GENERAL INFORMATION ONLY. IT IS NOT INTENDED TO AMOUNT TO
                  ADVICE ON WHICH YOU SHOULD RELY. YOU MUST OBTAIN PROFESSIONAL
                  OR SPECIALIST ADVICE BEFORE TAKING, OR REFRAINING FROM, ANY
                  ACTION ON THE BASIS OF THE CONTENT ON OUR WEBSITES. NO
                  INFORMATION OR ADVICE OBTAINED BY YOU FROM US OR THROUGH THE
                  SERVICE(S) OR WEBSITES SHALL CREATE ANY WARRANTY NOT EXPRESSLY
                  STATED IN THESE TERMS.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  13. LIMITATION OF LIABILITY
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  In no event shall Neetizen, its officers, directors,
                  employees, partners or suppliers be liable to you or any third
                  party for any special, punitive, incidental, indirect or
                  consequential damages or losses of any kind, or any damages or
                  losses whatsoever, including those resulting from loss of use,
                  data or profits, whether or not foreseeable or if Neetizen has
                  been advised of the possibility of such damages or losses, and
                  on any theory of liability, including breach of contract or
                  warranty, negligence or other tortious action, or any other
                  claim arising out of or in connection with: (1) the access or
                  use of or the inability to access or use the site,
                  application, services, or materials; (2) the statements or
                  actions of any third party on or via the site, application,
                  services or materials; (3) any dealings with vendors or other
                  third parties; (4) any unauthorized access to or alteration of
                  your transmissions, user materials or other data; (5) any
                  information that is sent or received or not sent or received;
                  (6) any failure to store or loss of data, files, materials or
                  other content; (7) any services available that are delayed or
                  interrupted; (8) any web site referenced or linked to from
                  this site or application; or (9) your access to or use of or
                  inability to access or use any linked site. Some jurisdictions
                  prohibit the exclusion or limitation of liability for
                  consequential or incidental damages. Accordingly, the
                  limitations and exclusions set forth above may not apply to
                  you.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  14. INDEMNITY AND WAIVER
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  14.1. You agree to indemnify and hold Neetizen and its
                  officers, co-branders, other partners and employees harmless
                  from any claim or demand, including reasonable attorneys'
                  fees, made by any third party due to or arising out of: (a)
                  your User Materials and any other content (e.g. computer
                  viruses) that you may submit, post to or transmit through the
                  Site (including a third party’s use of such User Materials or
                  content (e.g. reliance on the accuracy, completeness or
                  usefulness of your User Materials)); (b) your access to or use
                  of the Site, Application, Services or Materials (including any
                  use by your employees, contractors or agents and all uses of
                  your account numbers, user names and passwords, whether or not
                  actually or expressly authorized by you, in connection with
                  the Site, Application or any Services or Materials); (c) your
                  connection to the Site, Services or Materials; (d) your
                  violation of the Terms of Use; (e) the actions of any member
                  of your Work Group; (f) your infringement of any third party’s
                  Intellectual Property Rights when using any of the Software
                  made available on the Site, Application, Services or in any
                  Materials; (g) your violation of any rights of any third
                  party; (h) your access to or use of Linked Sites and your
                  connections thereto; or (i) any dealings between you and any
                  third parties advertising or promoting via the Site,
                  Application, Services or Materials.{" "}
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  14.2. In no event will Neetizen be liable for injury, loss,
                  claim, damages or any special, incidental, consequential,
                  exemplary or punitive damages of any kind arising out of or in
                  connection with any user access to, or use of the Site or
                  Application and any Material thereon or any goods, materials
                  or services available therefrom, whether based in contract,
                  tort and whether negligent or otherwise, even if Neetizen has
                  been advised the possibility of such damages. In the even that
                  this exclusion of liability may be lawfully limited,
                  Neetizen’s aggregate total liability to any User for all such
                  damages and losses shall be limited to the User registration
                  fee paid by the User or Rs. 100/-, whichever is applicable.{" "}
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  15. LANGUAGE
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  It is the express wish of the parties that the Terms of Use
                  and all related documents have been drawn up in English.{" "}
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  16. ASSIGNMENT; ENTIRE AGREEMENT; REVISIONS
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  16.1 You shall not, directly or indirectly, assign all or any
                  Your rights under these Terms or delegate performance of Your
                  duties under these Terms without Our prior written consent. We
                  may, without Your consent, assign Our agreement with You under
                  these Terms to any member of the Group Companies or in
                  connection with any merger or change of Our control or the
                  sale of all or substantially all of Our assets provided that
                  any such successor agrees to fulfill its obligations pursuant
                  to these Terms. Subject to the foregoing restrictions, these
                  Terms will be fully binding upon, inure to the benefit of and
                  be enforceable by the parties and their respective successors
                  and assigns.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  16.2 These Terms, together with any Form(s) and Supplemental
                  Terms, constitute the entire agreement, and supersede any and
                  all prior agreements between You and Us with regard to the
                  subject matter hereof. These Terms and any Form(s) shall
                  prevail over the terms or conditions in any purchase order or
                  other order documentation You or any Entity You represent
                  provides (all such terms or conditions being null and void),
                  and, except as expressly stated herein, there are no other
                  agreements, representations, warranties, or commitments which
                  may be relied upon by either party with respect to the subject
                  matter hereof. In the event of a conflict between any Form and
                  these Terms, these Terms shall prevail.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  16.3 We may amend these Terms from time to time, in which case
                  the new Terms will supersede prior versions. Please read these
                  Terms of use carefully before You start to use Our Service(s)
                  , Mobile Apps or Websites, as these will apply to Your use of
                  the Service(s) and Our Websites. Please check these Terms from
                  time to time to take notice of any changes We made, as they
                  will be binding on You. We will notify You not less than ten
                  (10) days prior to the effective date of any amendments to
                  these terms of service and Your continued use of the
                  Service(s) following the effective date of any such amendment
                  may be relied upon by Us as Your acceptance of any such
                  amendment. With respect to amendments only to the Supplemental
                  Terms, We will notify You as aforementioned only if the
                  Supplemental Terms are applicable to You. Our failure to
                  enforce at any time any provision of these Terms does not
                  constitute a waiver of that provision or of any other
                  provision of the Terms.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  17. SEVERABILITY; NO WAIVER
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  If any provision in these Terms is held by a court of
                  competent jurisdiction to be unenforceable, such provision
                  shall be modified by the court and interpreted so as to best
                  accomplish the original provision to the fullest extent
                  permitted by applicable law, and the remaining provisions of
                  these Terms shall remain in effect. Our non-exercise of any
                  right under or provision of these Terms does not constitute a
                  waiver of that right or provision of the Terms.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  18. GENERAL TERMS AND CONDITIONS
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  18.1 Entire Agreement
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  You acknowledge that You have read this Agreement, understand
                  it and agree to be bound by its terms and conditions. You also
                  agree that this Agreement read with the terms of the Privacy
                  Policy is the complete and exclusive statement of the
                  Agreement between Neetizen and You and supersedes all
                  proposals, representations or prior agreements, oral or
                  written, and any other communications between Neetizen and You
                  relating to the subject matter of this Agreement.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  18.2 Severability
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  The invalidity or unenforceability of any provision of this
                  Document will not affect the validity or enforceability of any
                  other provision, the remaining provisions being deemed to
                  continue in full force and effect.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  18.3 Assignment
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  We may assign this agreement or any of the rights or
                  obligations hereunder, and any causes of action arising
                  hereunder, to any third party without necessity or obligation
                  of notice to you.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  18.4 Amendments to this Agreement
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  We may in our sole discretion amend this Agreement from time
                  to time without any prior notice. This may include adding new
                  or different terms to, or removing terms from, this Agreement.
                  Such change shall be notified in the Application. Your use of
                  the Application after such notice of any change shall be
                  deemed to be an acceptance to the amended Agreement.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  18.5 No Waiver
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  The waiver or failure of either party to exercise in any
                  respect any right provided for herein will not be deemed a
                  waiver of any further right hereunder.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  18.6 Force Majeure
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  We will not be responsible for any failure to perform its
                  obligations under these Terms and Conditions due to
                  circumstances beyond its reasonable control, including without
                  limitation acts of God, war, riot, terrorism, embargoes and
                  acts of civil or military authorities, fire, flood or
                  accidents. You agree that Neetizen will be entitled to all
                  legal and equitable remedies otherwise available to it to
                  protect the intellectual property, proprietary rights and
                  Confidential Information of itself and its Licensors,
                  including without limitation, the right to seek and obtain
                  injunctive relief and enforce the same against you without the
                  necessity of having to post bond or other such guarantee.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  19. EXPORT COMPLIANCE AND USE RESTRICTIONS; GOVERNMENT END USE
                  PROVISIONS
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  The Service(s) and other Software or components of the
                  Service(s) which We may provide or make available to You or
                  Users may be subject to India’s (or other territories) export
                  control and economic sanctions laws. You agree to comply with
                  all such laws and regulations as they relate to access to and
                  use of the Service(s), Software and such other components by
                  You and Users. You shall not access or use the Service(s) if
                  You are located in any jurisdiction in which the provision of
                  the Service(s), Software or other components is prohibited
                  under Indian or other applicable laws or regulations (a
                  “Prohibited Jurisdiction”) and You shall not provide access to
                  the Service(s) to any government, entity or individual located
                  in any Prohibited Jurisdiction. You represent, warrant and
                  covenant that (i) You are not named on any Indian government
                  (or other government) list of persons or entities prohibited
                  from receiving Indian exports, or transacting with any Indian
                  person, (ii) You are not a national of, or a company
                  registered in, any Prohibited Jurisdiction, (iii) You shall
                  not permit Users to access or use the Service(s) in violation
                  of any Indian or other applicable export embargoes,
                  prohibitions or restrictions, and (iv) You shall comply with
                  all applicable laws regarding the transmission of technical
                  data exported from the United States and the country in which
                  You and Your Users are located.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  20. RELATIONSHIP OF THE PARTIES
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  The parties are independent contractors. These Terms do not
                  create a partnership, franchise, joint venture, agency,
                  fiduciary or employment relationship among the parties.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  21. SURVIVAL
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  Sections 2 (Your Responsibilities), 5 (Intellectual Property
                  Rights), 8 (Suspension and Termination), 9 (Confidentiality),
                  10 (Data Privacy and Security), 13 (Disclaimer of Warranties),
                  14 (Limitation of Liability), 15 (Indemnification), 20
                  (Survival), 21 (Notices; Consent to electronic communication)
                  and 23 (Governing Law and Dispute Resolution) shall survive
                  any termination of Our agreement with respect to use of the
                  Service(s) by You. Termination of such agreement shall not
                  limit Your or Our liability for obligations accrued as of or
                  prior to such termination or for any breach of these Terms.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  22. NOTICES; CONSENT TO ELECTRONIC COMMUNICATIONS
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  22.1 All notices to be provided by Us to You under these Terms
                  may be delivered in writing (i) by nationally recognized
                  overnight delivery service (“Courier”) to the contact mailing
                  address provided by You on any while subscribing to the
                  Service(s); or (ii) electronic mail to the e-mail address
                  provided for Your Account.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  22.2 Our address for a notice is a email to
                  support@freshworks.com by electronic mail. All notices shall
                  be deemed to have been given immediately upon delivery by
                  electronic mail, or if otherwise delivered upon receipt or, if
                  earlier, two (2) business days after being deposited in the
                  mail or with a Courier as permitted above.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  23. ANTI-CORRUPTION
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  23.1 You agree that You have not received or been offered any
                  illegal or improper bribe, kickback, payment, gift, or thing
                  of value from any of Our employees or agents in connection
                  with these Terms. Reasonable gifts and entertainment provided
                  in the ordinary course of business do not violate the above
                  restriction. If You learn of any violation of the above
                  restriction, You will use reasonable efforts to promptly
                  notify Us at neetizenhelp@gmail.com.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  24. GOVERNING LAW AND DISPUTE RESOLUTION
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  24.1 Governing Law and Jurisdiction
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  This Site or Application (excluding linked sites) is
                  controlled by Neetizen from its offices within Agra, Uttar
                  Pradesh, India. By accessing this Site or Application, you
                  agree that all matters relating to your access to, or use of,
                  this Site shall be governed by the statutes and laws of India,
                  without regard to the conflicts of laws principles thereof.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  24.2 “For any dispute you have with us, you agree to first
                  contact us and attempt to resolve the dispute with us
                  informally”.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  24.3 Any dispute, difference, controversy or claim arising out
                  of or in connection with these Terms of Use, or the validity,
                  interpretation, implementation or alleged breach of these
                  Terms of Use or anything done or omitted to be done pursuant
                  to these Terms of Use (each a “Dispute”) shall be settled by
                  way of discussions between the representatives of the Site or
                  Application and the User. If discussions do not resolve the
                  Dispute, within 30 (thirty) days of any Party seeking
                  discussions by notice to the other Parties, then such Dispute
                  shall be finally settled under, and in accordance with Clause
                  24.4.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  24.4 Any Dispute that cannot be resolved in accordance with
                  Clause 24.3 shall be submitted to final and binding
                  arbitration at the request of any of the Parties upon written
                  notice to the other Parties, and the following shall apply to
                  such arbitration:
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  a. The arbitration shall be conducted in accordance with the
                  Arbitration and Conciliation Act, 1996 for the time being in
                  force and the rules made thereunder. All proceedings of such
                  arbitration shall be in the English language and the venue of
                  arbitration shall be New Delhi.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  b. The arbitral panel shall consist of 1 (one) arbitrator to
                  be mutually appointed by the representatives of the Site and
                  the User, and the costs of such arbitrators shall be borne
                  jointly by the Parties.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  c. Nothing shall prevent or restrict a Party from seeking
                  interim relief, from any court having jurisdiction to grant
                  the same provided that the pursuit of such interim relief
                  through a court having jurisdiction, shall not be a waiver of
                  the obligation of the Parties to pursue the resolution of all
                  Disputes that cannot be resolved in accordance with Clause
                  24.4 through the arbitration process described in this Clause
                  24.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  25. DEFINITIONS
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  When used in these Terms with the initial letters capitalized,
                  in addition to terms defined elsewhere in these Terms, the
                  following terms have the following meanings:
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  Account: means any accounts or instances created by or on
                  behalf of You for access and use of any of the Service(s).
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  Affiliate: means, with respect to a party, any entity that
                  directly or indirectly controls, is controlled by, or is under
                  common control with such party, whereby “control” (including,
                  with correlative meaning, the terms “controlled by” and “under
                  common control”) means the possession, directly or indirectly,
                  of the power to direct, or cause the direction of the
                  management and policies of such person, whether through the
                  ownership of voting securities, by contract, or otherwise.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  Agent: means an individual authorized to use the Service(s)
                  through Your Account for such Service(s) as an agent and/or
                  administrator as identified through a User Login.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  API: means the application programming interfaces developed,
                  enabled by or licensed to Us that permits a User to access
                  certain functionality provided by the Service(s).
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  API Policies: means the policies published by us
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  Apps: mean the software applications listed on the Market
                  Place which are created, developed, licensed or owned by Us or
                  third party developers. The term also includes any updates,
                  upgrades and other changes to such software applications and
                  versions thereof.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  Applicable Data Protection Law: where You are established in
                  the India is Ministry of Communication and Information
                  Technology Notofication Dated April 11, 2011.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  Confidential Information: means all information disclosed by
                  You to Us or by Us to You which is in tangible form and
                  labeled “confidential” (or with a similar legend) or which a
                  reasonable person would understand to be confidential given
                  the nature of the information and circumstances of disclosure.
                  For purposes of these Terms, Service Data shall be deemed
                  Confidential Information. Notwithstanding the foregoing,
                  Confidential Information shall not include any information
                  which (a) was publicly known and made generally available in
                  the public domain prior to the time of disclosure by the
                  disclosing party; (b) becomes publicly known and made
                  generally available after disclosure by the disclosing party
                  to the receiving party through no action or inaction of the
                  receiving party; (c) is already in the possession of the
                  receiving party at the time of disclosure by the disclosing
                  party as shown by the receiving party’s files and records
                  prior to the time of disclosure; (d) is obtained by the
                  receiving party from a third party without a breach of such
                  third party’s obligations of confidentiality; (e) is
                  independently developed by the receiving party without use of
                  or reference to the disclosing party’s Confidential
                  Information, as shown by documents and other competent
                  evidence in the receiving party’s possession; or (f) is
                  required by law to be disclosed by the receiving party,
                  provided that the receiving party shall, to the extent legally
                  permitted, give the disclosing party written notice of such
                  requirement prior to disclosing so that the disclosing party
                  may seek a protective order or other appropriate relief.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  Custom Apps: means an application developed specifically for a
                  User of the Service(s) and not listed in the Market Place.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  Documentation: means any written or electronic documentation,
                  images, video, text or sounds specifying the functionalities
                  of the Service(s) provided or made available by Us to You or
                  Your Users through the Service(s) or otherwise.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  End-User: means any person or entity other than You or Your
                  Users with whom You interact using the Service(s).
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  Form: means any service order form referencing these Terms and
                  executed or approved by You and Us with respect to Your
                  subscription to the Service(s), which form may detail, among
                  other things, the number of Users authorized to use the
                  Service(s) under Your subscription to the Service(s) and the
                  Service Plan(s) applicable to Your subscription to the
                  Service(s).
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  Neetizen: means the digital governance tool developed to aid
                  in processing of legislative requests.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  Mobile Applications: mean the software applications created,
                  developed and owned by Us to enable access and use of the
                  Service(s) through mobile or other handheld devices (such as
                  apps on iOS or Android devices).
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  Personal Data: means data relating to a living individual who
                  is or can be identified either from the data or from the data
                  in conjunction with other information that is in, or is likely
                  to come into, the possession of the data controller (as
                  defined under Applicable Data Protection Law).
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  Privacy Notice: means Our privacy notice as updated from time
                  to time.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  Processing/To Process: means any operation or set of
                  operations which is performed upon Personal Data, whether or
                  not by automatic means, such as collection, recording,
                  organization, storage, adaptation or alteration, retrieval,
                  consultation, use, disclosure by transmission, dissemination
                  or otherwise making available, alignment or combination,
                  blocking, erasure or destruction.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  Service Data: means all electronic data, text, messages or
                  other materials, including Personal Data of Users and
                  End-Users, submitted to the Service(s) by You through Your
                  Account in connection with Your use of the Service(s),
                  including, without limitation, Personal Data.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  Service(s): mean and include Neetizen or any new services that
                  We may introduce as a Service to which You may subscribe to
                  and any updates, modifications or improvements to the
                  Service(s), including individually and collectively, Software,
                  the API and any Documentation. You may subscribe to one or
                  more of the Service(s).
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  Software: means software provided by Us (either by download or
                  access through the internet) that allows You to use any
                  functionality in connection with the Service(s) and includes a
                  Mobile Application.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  Supplemental Terms: means the Service(s) - specific terms set
                  forth in section 24 below, additionally applicable to You when
                  You enable, access or use such Service.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  Us: means Neetizen or any of its successors or assignees. In
                  these Terms, Us may also be referred to as “We”, and “Our”.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  User: means those who are designated users within the
                  Service(s), including an Account administrator, Agents and
                  other designated users.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  Websites: means the websites for various Service(s) and other
                  websites that Neetizen operates.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  24. SUPPLEMENTAL TERMS
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  The Supplemental Terms below may contain terms that are
                  specific to one or more Service(s). For avoidance of doubt, in
                  the event of a conflict or inconsistency between the rest of
                  the Terms and these Supplemental Terms, these Supplemental
                  Terms shall prevail.
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  A) FOR USE OF APPS, INTEGRATIONS; MODIFICATION OF EXISTING
                  FEATURES & NEW FEATURE RELEASE
                </Text>
                <Text size={14} color="rgba(0,0,0,1)" style={{ marginTop: 10 }}>
                  You acknowledge that (i) when You install any of the Apps or
                  enable integrations or (ii) where (a) a feature is modified or
                  (b) a new feature is released within the Service(s), You may
                  be shown additional terms governing their usage. Your
                  continued usage of such Apps or integrations or such features
                  may be relied upon by Us as Your acceptance of such additional
                  terms.
                </Text>
              </Block>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff2ff",
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE,
    paddingBottom: 20,
  },
});

export default Terms;
