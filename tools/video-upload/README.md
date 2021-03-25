# Create a video in JW so have access to an upload url

Regarding creating an upload URL you are correct that this can be done using our Management API. You could use the API endpoint
https://api.jwplatform.com/v1/videos/create to create a new video object (https://developer.jwplayer.com/jwplayer/reference#post_videos-create). Upon executing a successful API call to this endpoint the response returned will contain information on the upload URL which can then be used to upload a file using a POST request.

More information on this process can be found here:
https://developer.jwplayer.com/jwplayer/docs/upload-files
