<template lang="html">
  <div class="container-fluid">
      <h2>JavaScript Promises: <span class="sub-title">Reducing Development Time &amp; Effort</span></h2>
      <div class="container-fluid">
        <section>
          <h4>More than callbacks?</h4>
          <p>There are those who would argue that Promises, as implemented in ES2015 (aka ES6), are nothing more than syntactic sugar over the often complex and difficult to follow "callback method." There are also those who would argue callbacks are not hard to follow and there are certainly examples where this is true (e.g. simple AJAX request callbacks, event handlers, ExpressJS route handling) but there are more complicated processes which would require callbacks to be passed from function to function a multitude of times before finally being called. This can quickly become confusing and lead to lost time and wasted effort while backtracking to find where the callback was defined in the first place (a problem often exacerbated by overly simplified naming schemes).</p>
        </section>
        <section>
          <h4>Okay, so callbacks suck… but how can Promises help?</h4>
          <p>Glad you asked. Here are 3 key ways Promises can help reduce development time and effort:</p>
          <ul>
              <li>Readability / Chaining</li>
              <li>Error Handling</li>
              <li>Asynchronous Agnosticism</li>
          </ul>
          <p>If you’ve never seen what constructing a Promise looks like start <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">here.</a></p>
        </section>
        <section>
          <h4>Readability / Chaining</h4>
          <p>This is one of the great time savers when reviewing or refactoring code. With callbacks you need to trace through potentially hundreds or thousands of lines of code before getting the whole picture of what the code is doing. With Promise Chaining we get highly readable and quickly understandable code. For example, you may have a button to get some data from Japan and with Promise Chaining the event handler may look something like this:</p>
          <code>
              <pre>getDataFromJapan().then(storeJapanData).then(translateJapaneseToEnglish).then(sendEnglishToUser);</pre>
          </code>
          <p>Each of the phrases above is a function that will be called in order and we can quickly find these functions in the code base to see how each of them operates and adjust as needed. While this single line of code may not tell us everything that is happening in the background, with proper function naming it can be an excellent reference as to how the main function operates when the user asks for data from Japan. Even someone unfamiliar with any kind of coding can look at this line and understand what happens when the button is clicked.</p>
        </section>
        <section>
          <h4>Error Handling</h4>
          <p>Promises have a built in method <code>.catch()</code> which can be placed at the end of a chain of promises. Rather than constantly using <code>if(error)</code> checks to deal with errors from asynchronous code, the catch statement at the end of your Promise chain can handle any errors that occur along the way. If we place a <code>.catch(sendErrorToUser)</code> at the end of our above example:</p>
          <code>
              <pre>getDataFromJapan().then(storeJapanData).then(translateJapaneseToEnglish).then(sendEnglishToUser).catch(sendErrorToUser);</pre>
          </code>
          <p>we can easily send any error that occurs from getting, storing, or translating or data from Japan back to the user. Alternatively, if sending a raw error is undesirable, the errors can be handled locally within any of those functions and a custom message can then be rejected to be caught by sendErrorToUser. Now we find that if the translation to English fails we can easily call <code>reject(‘Translation failed’)</code> to alert the user. Of course the front end can handle the message ‘Translation failed’ however it wants, e.g. tell the user, retrieve the original Japanese, re-attempt the translation. With Promises, to quote Weird Al, “The world is our burrito.”</p>
        </section>
        <section>
          <h4>Asynchronous Agnosticism</h4>
          <p>What does that phrase even mean? Basically what goes on inside a promise can be synchronous or asynchronous, much like the honey badger Promises don't care. As long as at some point .resolve() or .reject() is called everything should be just fine. Additionally we get the best tool of all for handling multiple asynchronous operations, the mighty Promise.all()</p>
          <p>Promise.all() is my personal favorite part of the whole archetype. It traverses an array of Promises and resolves once all the individual Promises are done. Perhaps we want to get data not just from Japan, but also Russia, France, Italy, and India. We don’t want to show the users the translations as they finish individually because each message contains financial data that interacts with the other messages. We certainly wouldn’t want to tell the user they had $5000 in their account when it should be $3000 less than that because of transactions in France that we weren’t done processing yet.</p>
          <p>So if we imagine that we have functions returning promises similar to our above example we can turn that into the following:</p>
          <code>
              <pre>
    let accountDataRequests = [
        getJapaneseAccounts(),
        getFrenchAccounts(),
        getRussianAccounts(),
        getItalianAccounts(),
        getIndianAccounts()
    ];

    Promise.all(accountDataRequests).then(sendFiguresToUser).catch(sendErrorToUser);
              </pre>

          </code>
          <p>Now our user isn’t presented the data until all of it is ready to be consumed. No messy callbacks from one function to another, no wasted time waiting for one country to respond before requesting data from the next, and no timeouts or intervals to check the status of responses. Just clean, easy to read, easy to maintain code that handles multiple asynchronous requests before acting upon all the data at once.</p>
        </section>
        <section>
          <h5> Posted By: Adam Belliveau</h5>
          <h5>Oct. 16, 2017</h5>
          <p>Any questions or comments? Contact me at <a href="mailto:abellive@me.com">abellive@me.com</a></p>
        </section>
      </div>
  </div>
</template>

<script>

    export default {
        name: 'Promises'
    };

</script>

<style lang="postcss" scoped>

    pre {
        margin: 0px 20px;
    }
    .sub-title {
        font-size: 0.8em;
    }
    section {
        margin: 25px 0;
    }
    h4 {
        font-weight: bold;
    }

</style>
