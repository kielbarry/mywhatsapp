<ion-view title="{{ chat.data | chatName }}">
  <ion-nav-buttons side="right">
    <button class="button button-clear">
    <img class="header-picture" ng-src="{{ chat.data | chatPicture }}"></img>
    </button>
  </ion-nav-buttons>
  <ion-content class="chat" delegate-handle="chatScroll">
    <div class="message-list">
      <div ng-repeat="message in chat.messages" class="message-wrapper">
        <div class="message" ng-class="message.userId === $root.currentUser._id ? 'message-mine' : 'message-other'">
          // <ng-switch on="message.type">
          //   <div ng-switch-when="text" class="text">{{ message.text }}</div>
          //   <div ng-switch-when="picture" class="picture">
          //     <img ng-src="{{ message.picture }}"></img>
          //   </div>
          // </ng-switch>
          <span class="message-timestamp">{{ message.timestamp | amDateFormat: 'HH:mm' }}</span>
        </div>
      </div>
    </div>
  </ion-content>
  <ion-footer-bar keyboard-attach class="bar-stable footer-chat item-input-inset">
    <button class="button button-clear button-icon button-positive icon ion-ios-upload-outline"></button>

    <label class="item-input-wrapper">
      <input ng-model="chat.message"
             dir="auto"
             type="text"
             on-return="chat.sendMessage(); chat.closeKeyboard()"
             on-focus="chat.inputUp()"
             on-blur="chat.inputDown()"/>
    </label>

    <span ng-if="chat.message.length > 0">
      <button ng-click="chat.sendMessage()" class="button button-clear button-positive">Send</button>
    </span>
    <span ng-if="!chat.message || chat.message.length === 0">
      <button ng-click="chat.sendPicture()" class="button button-clear button-icon button-positive icon ion-ios-camera-outline"></button>
      <i class="buttons-seperator icon ion-android-more-vertical"></i>
      <button class="button button-clear button-icon button-positive icon ion-ios-mic-outline"></button>
    </span>
  </ion-footer-bar>
</ion-view>
