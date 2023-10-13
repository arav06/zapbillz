<template>
    <div class="row" v-if="invoice">
        <div class="col-12 mb-4 d-flex justify-content-between align-items-start">
            <router-link class="btn btn-sm btn-light btn--icon-left"
                         :to="''">
               <img src="/logo.png" width="280" height="70"/>
            </router-link>
            <div class="d-flex align-items-center">
              
          
                <b-dropdown variant="link" no-caret right>
                    <template slot="button-content">
                    <button class="btn bg-white btn-md text-xl" style="color:black;" @click="print">
Generate PDF
</button>

<button class="btn bg-white btn-md text-xl" style="color:black;margin-left:2rem">
New Invoice
</button>
                    </template>
                 
                </b-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import NotificationService from '@/services/notification.service';
import {
  BDropdown,
  BDropdownDivider,
  BDropdownGroup,
  BDropdownItemButton,
} from 'bootstrap-vue';
import AppSelect from '@/components/form/AppSelect';

export default {
  i18nOptions: {
    namespaces: ['invoice-controls', 'statuses'],
  },
  components: {
    BDropdown,
    BDropdownDivider,
    BDropdownItemButton,
    BDropdownGroup,

    AppSelect,
  },
  computed: {
    ...mapGetters({
      invoice: 'invoices/invoice',
    }),
    getStatusObj() {
      return this.invoiceStatuses
        .find(obj => obj.value === this.invoice.status);
    },
    invoiceStatuses() {
      return [ {
        value: 'booked',
        name: this.$t('statuses.booked'),
      }, {
        value: 'sent',
        name: this.$t('statuses.sent'),
      }, {
        value: 'paid',
        name: this.$t('statuses.paid'),
      }, {
        value: 'cancelled',
        name: this.$t('statuses.cancelled'),
      }];
    },
  },
  methods: {
    async deleteInvoice() {
      const confirmed = await this.$bvModal.msgBoxConfirm(`${this.$t('delete_modal.title')} ${this.invoice.number}?`, {
        okTitle: this.$t('delete_modal.ok_title'),
        okVariant: 'danger',
        cancelTitle: this.$t('delete_modal.cancel_title'),
        cancelVariant: 'btn-link',
        contentClass: 'bg-base dp--24',
      });
      if (confirmed) {
        await this.$store.dispatch('invoices/deleteInvoice', this.invoice);
        NotificationService.success('Deleted');
        this.$router.push({
          name: 'invoices',
        });
      }
    },
    bookInvoice() {
      this.$store.dispatch('invoices/bookInvoice');
    },
    updateProp(props) {
      this.$store.dispatch('invoices/updateInvoice', {
        props,
        invoiceId: this.invoice.id,
      });
    },
    toggleCompact() {
      this.updateProp({ is_compact: !this.invoice.is_compact });
    },
    openCustomizationsModal() {
      this.$store.commit('invoices/isCustomizationsModalOpen', true);
    },
    print() {
      window.print();
    },
  },
};
</script>
