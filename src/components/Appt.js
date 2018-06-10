import React from 'react'

export default () => (
  <div className="appt" dangerouslySetInnerHTML={{ __html: `
    <!-- Start SimplePractice Booking Widget Embed Code -->
    <style>.spwidget-button-wrapper{text-align: center}.spwidget-button{display: inline-block;padding: 12px 24px;color: #fff !important;background: #de6a26;border: 0;border-radius: 4px;font-size: 16px;font-weight: 600;text-decoration: none}.spwidget-button:hover{background: #d15913}.spwidget-button:active{color: rgba(255, 255, 255, .75) !important;box-shadow: 0 1px 3px rgba(0, 0, 0, .15) inset}</style>
    <div class="spwidget-button-wrapper"><a href="https://lisa-randall.clientsecure.me" class="spwidget-button" data-spwidget-scope-id="af1501ac-98b6-41dc-a28b-8485842ed063" data-spwidget-scope-uri="lisa-randall" data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b" data-spwidget-scope-global data-spwidget-autobind>Request Appointment</a></div>
    <script src="https://widget-cdn.simplepractice.com/assets/integration-1.0.js"></script>
    <!-- End SimplePractice Booking Widget Embed Code -->
  ` }} />
)
