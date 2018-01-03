<template>
  <div class="user">
    <section class="header">
      <v-flex xs10>
        <v-text-field
          name="name"
          label="username"
        ></v-text-field>
      </v-flex>
      <v-flex
        align-center
        justify-center
      >
        <v-btn outline color="primary">Search</v-btn>
      </v-flex>
    </section>
    <v-data-table
      v-model="selected"
      v-bind:headers="headers"
      v-bind:items="items"
      select-all
      v-bind:pagination.sync="pagination"
      item-key="name"
      class="elevation-1"
    >
      <template slot="headers" slot-scope="props">
        <tr>
          <th>
            <v-checkbox
              secondary
              hide-details
              @click.native="toggleAll"
              :input-value="props.all"
              :indeterminate="props.indeterminate"
            ></v-checkbox>
          </th>
          <th v-for="header in props.headers" :key="header.text"
            :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
            @click="changeSort(header.value)"
          >
            <v-icon>arrow_upward</v-icon>
            {{ header.text }}
          </th>
          <th>
            Actions
          </th>
        </tr>
      </template>
      <template slot="items" slot-scope="props">
        <tr :active="props.selected" @click="props.selected = !props.selected">
          <td>
            <v-checkbox
              primary
              hide-details
              :input-value="props.selected"
            ></v-checkbox>
          </td>
          <td>{{ props.item.name }}</td>
          <td>{{ props.item.avatar }}</td>
          <td>{{ props.item.isAdmin }}</td>
          <td>
            <v-layout justify-center>
              <v-btn dark small icon flat color="secondary">
                <v-icon small>remove</v-icon>
              </v-btn>
              <v-btn dark small icon flat color="cyan">
                <v-icon small>edit</v-icon>
              </v-btn>
            </v-layout>
          </td>
        </tr>
      </template>
    </v-data-table>
    <section class="action-wrapper">
      <v-btn
        absolute
        dark
        fab
        top
        right
        color="pink"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </section>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      pagination: {
        sortBy: 'name',
      },
      selected: [],
      headers: [
        {
          text: 'username',
          align: 'left',
          value: 'name',
        },
        {
          text: 'avatar',
          value: 'avatar',
        },
        {
          text: 'isAdmin',
          value: 'isAdmin',
        },
      ],
      items: [
        {
          avatar: 'https://onehower.oss-cn-shenzhen.aliyuncs.com/images/widgets/paintroller-01_1x.png',
          name: 'Frozen Yogurt',
          isAdmin: true,
        },
        {
          avatar: 'https://onehower.oss-cn-shenzhen.aliyuncs.com/images/widgets/paintroller-01_1x.png',
          name: 'Ice cream sandwich',
          isAdmin: false,
        },
        {
          avatar: 'https://onehower.oss-cn-shenzhen.aliyuncs.com/images/widgets/paintroller-01_1x.png',
          name: 'Eclair',
          isAdmin: false,
        },
        {
          avatar: 'https://onehower.oss-cn-shenzhen.aliyuncs.com/images/widgets/paintroller-01_1x.png',
          name: 'Cupcake',
          isAdmin: false,
        },
        {
          avatar: 'https://onehower.oss-cn-shenzhen.aliyuncs.com/images/widgets/paintroller-01_1x.png',
          name: 'Gingerbread',
          isAdmin: false,
        },
        {
          avatar: 'https://onehower.oss-cn-shenzhen.aliyuncs.com/images/widgets/paintroller-01_1x.png',
          name: 'Jelly bean',
          isAdmin: false,
        },
        {
          avatar: 'https://onehower.oss-cn-shenzhen.aliyuncs.com/images/widgets/paintroller-01_1x.png',
          name: 'Lollipop',
          isAdmin: false,
        },
        {
          avatar: 'https://onehower.oss-cn-shenzhen.aliyuncs.com/images/widgets/paintroller-01_1x.png',
          name: 'Honeycomb',
          isAdmin: false,
        },
        {
          avatar: 'https://onehower.oss-cn-shenzhen.aliyuncs.com/images/widgets/paintroller-01_1x.png',
          name: 'Donut',
          isAdmin: false,
        },
        {
          avatar: 'https://onehower.oss-cn-shenzhen.aliyuncs.com/images/widgets/paintroller-01_1x.png',
          name: 'KitKat',
          isAdmin: false,
        },
      ],
    };
  },
  methods: {
    toggleAll() {
      if (this.selected.length) this.selected = [];
      else this.selected = this.items.slice();
    },
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending;
      } else {
        this.pagination.sortBy = column;
        this.pagination.descending = false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user {
  height: 100%;
  width: 100%;
}

.header {
  display: flex;
  width: 100%;
}

.action-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 36px;
  height: 44px;
  background-color: #00bcd4;
}
</style>
