# Classification using SVM

In this post, we'll have a look at classification using Support Vector Machines.

Support Vactor Machines, or SVM, work similar to linear regression the difference being that instead of using a line for clasification, it uses a hyper plane. A hyper plane is n - 1 dimensional subspace for n feaures. In case of linear SVM, it can be understood as using a street to make the decision boundary, not a line. The width of this street is determined by feature instances that are closest to it i.e. the street is *supported* by these instances. It can be determined in two ways:

+ Hard margin classification: None of the training instances lie in the hyperplace. It does not work well for data that is not linear. Also, it is quite sensitive to outliers. So, it usually has higher error rate.
+ Soft margin classifcation:  It adds more flexibility by allowing a fixed number of intances to be in the hyperplane, which is an adjustible parameter.

The image example here shows how it works.

In cases where we need a nonlinear decision boundary, different kernals can be used. The kernals are mathematical functions that tranforms the data according a specific function. The kernal *trick* is that akernal function that does not actually calculate the values, which makes it way faster than if we used the actual functions. Various kernals provided by sklearn are:

+ Linear: It uses linear function.
+ Polynomial: It uses polynomial function.
+ RBF (Radial basis function): It baiscally groups on similarity based on euclidean distance between them. It uses radius of influence of samples selected by the model as support vectors. [More details](http://scikit-learn.org/stable/auto_examples/svm/plot_rbf_parameters.html)
+ Sigmoid: It uses sigmoid function.
+ Precomputed: It can be used to pass any function as a kernal, given that it is a keral funtion.

### Loading and analysing data
For understanding code better, I would suggest you to open jupyter notebook(.ipnyb file) from github [link](https://github.com/pratyakshajha/Machine-Learning-Problems/tree/master/Breast%20cancer%20Wisconsin).
The loading part is quite straight forward, by using dataframe from pandas. Eyeball the data to have a quick idea about the data. `df.info()` gives us information about data types, missing values, column names, etc. `df.describe()` gives a statistical summary of numerical features.

Correlation matrix is important as it helps to determine important features and useless features.

<script src="https://gist.github.com/pratyakshajha/d4b01e087c669af327a097ef2aaa4a5c.js"></script>

### Test - Train Split 
Before splitting, it is apparent from correlation values that some columns are less correlated with output variable. So,remove the features whoe magnitude of correlation is smaller than 0.6. After this, split into training and test data.
Using `StandardScaler`, we scale data as algorithms are pretty sensitive to scaling, especially SVM.

<script src="https://gist.github.com/pratyakshajha/d7c7868b050bae30811007cf27a93056.js"></script>

### Training and Evaluation

Shortlist several classifiers that usually perform well to shortlist the best model. After cross validating each classifier, it outputs a message that gives mean error and standard deviation of error in brackets. 

<script src="https://gist.github.com/pratyakshajha/4ad4c9575e1bb620123a17f70eb4c2ad.js"></script>

Logostic Regression classifier gives slightly better accuracy, but has higher standard deviation. Hence, we choose SVM for classification.  Select SVM, fit, evaluate and save the model. For evaluation, accuracy of classification is used, which gives a score of 98.2%. Through confusion matrix, we see that thera are no true negatives and a few false positives. This is desirable because its better to wrongly predict benign tumor as malignant rather than other way around. F1 score is useful error measuring technique in such cases. Further on this in another post.  

Accompanying GitHub repository [link](https://github.com/pratyakshajha/Machine-Learning-Problems/tree/master/Breast%20cancer%20Wisconsin).