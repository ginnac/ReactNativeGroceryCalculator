import React, {Component} from 'react';
import {FlatList, Text, View, Linking} from 'react-native';
import Layout from '../components/suggestion-layout';
import Detailslayout from '../components/recipeDetailsLabels';
import Empty from '../components/empty';
import Separator from '../components/separator';
import Suggestion from '../components/suggestion';

export default class SugesstionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theId: '',
      clicked: false,
      count: 0,
    };
  }

  renderEmpty = () => <Empty text="There is no mathing results" />;
  ItemSeparator = () => <Separator />;
  keyExtractor = item => item.id.toString();

  seeDetails = id => {
    if (id === this.state.theId && this.state.clicked === true) {
      this.setState({clicked: false, theId: ''});
      console.log(this.state);
    } else {
      this.setState({theId: id, clicked: true});
      console.log(this.state);
    }
  };

  renderItem = ({item}) => {
    return (
      <View>
        <Suggestion {...item} theId={this.state.theId} seeDetails={this.seeDetails} />

        {this.state.theId === item.id && this.state.clicked === true ? (
          <Layout title="Details">
            <Detailslayout title="Ingredients-">
              <FlatList
                //extraData={this.state.title,this.state.theId}
                keyExtractor={this.keyExtractor}
                //
                data={item.extendedIngredients}
                ListEmptyComponent={this.renderEmpty}
                ItemSeparatorComponent={this.ItemSeparator}
                renderItem={({item}) => {
                  return (
                    <Text style={{alignSelf: 'center'}}>{item.original}</Text>
                  );
                }}
              />
            </Detailslayout>
            <Detailslayout title="Instructions-">
              <Text
                style={{alignSelf: 'center', marginRight: 3, marginLeft: 6}}>
                {item.instructions}
              </Text>
            </Detailslayout>
            <Text
              style={{color: 'blue', alignSelf: 'center'}}
              onPress={() => Linking.openURL(item.sourceUrl)}>
              Go to Article
            </Text>
          </Layout>
        ) : null}
      </View>
    );
  };

  render() {
    return (
      <Layout title={this.props.sectionTitle}>
        <FlatList
          extraData={(this.state.title, this.state.theId)}
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.ItemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    );
  }
}
