export function pageTitle() {
    const pageTitle = document.title;
    const attentionMessage = "*Come Back!";
    const blinkEvent = null;

    document.addEventListener("visibilitychange", function (e) {
      const isPageActive = !document.hidden;

      if (!isPageActive) {
        blink();
      } else {
        document.title = pageTitle;
        clearInterval(blinkEvent);
      }
    });

    function blink() {
      blinkEvent = setInterval(function () {
        if (document.title === attentionMessage) {
          document.title = pageTitle;
        } else {
          document.title = attentionMessage;
        }
      }, 100);
    }
  };
