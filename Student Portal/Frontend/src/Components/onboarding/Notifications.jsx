import React from "react";

function NotificationStep({ formData, setFormData }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">
        Notification Preferences
      </h2>

      <label className="flex gap-2">
        <input
          type="checkbox"
          checked={formData.pushNotification}
          onChange={() =>
            setFormData({
              ...formData,
              pushNotification:
                !formData.pushNotification,
            })
          }
        />

        Push Notifications
      </label>

      <label className="flex gap-2 mt-3">
        <input
          type="checkbox"
          checked={formData.emailUpdates}
          onChange={() =>
            setFormData({
              ...formData,
              emailUpdates:
                !formData.emailUpdates,
            })
          }
        />

        Email Updates
      </label>
    </div>
  );
}

export default NotificationStep;